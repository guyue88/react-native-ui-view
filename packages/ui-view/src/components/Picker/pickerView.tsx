import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { Theme } from '../Styles/theme';

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

export type PickerViewProps = {
  // 数据源
  dataSource: string[][];
  // 选中项
  selectedIndex: number[];
  // 单项高度
  itemHeight: number;
  // change回调
  onChange?: (selectedIndex: number[]) => void;
};

const PickerView: React.FC<PickerViewProps> = props => {
  const { dataSource, selectedIndex, itemHeight, onChange } = props;
  const [showPickerItem, setShowPickItem] = useState(false);

  // ScrollView 在Modal中会影响Modal的高度计算，先让容器渲染出来，再渲染ScrollView
  useEffect(() => {
    setTimeout(() => {
      setShowPickItem(true);
    }, 50);
  }, []);

  const height = Math.min(300, WINDOW_HEIGHT / 3);
  const padding = (height - itemHeight) / 2;

  const highlightStyle = {
    top: padding,
    height: itemHeight,
    width: WINDOW_WIDTH,
    borderTopColor: Theme.borderColor,
    borderBottomColor: Theme.borderColor,
    borderTopWidth: Theme.borderWidthSm,
    borderBottomWidth: Theme.borderWidthSm,
  };

  return (
    <View style={[styles.container, { height }]}>
      {showPickerItem
        ? dataSource.map((item, index) => (
            <View key={index} style={[styles.picker]}>
              <View style={[styles.highlight, highlightStyle]} />
              <PickerItem
                dataSource={item}
                selectedIndex={selectedIndex[index]}
                itemHeight={itemHeight}
                onChange={i => {
                  const data = [...selectedIndex];
                  data[index] = i;
                  onChange && onChange(data);
                }}
              />
            </View>
          ))
        : null}
    </View>
  );
};

export default PickerView;

type PickerItemProps = {
  // 数据源
  dataSource: string[];
  // 选中项
  selectedIndex: number;
  // 单项高度
  itemHeight: number;
  // change回调
  onChange?: (selectedIndex: number) => void;
};

const PickerItem: React.FC<PickerItemProps> = props => {
  const { dataSource, selectedIndex, itemHeight, onChange } = props;

  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const $scroll = useRef<ScrollView | null>(null);
  const isScrolling = useRef(false);

  const minHeight = 300;
  const height = Math.min(minHeight, WINDOW_HEIGHT / 3);
  const padding = (height - itemHeight) / 2;

  const onMomentumScrollBegin = () => {
    isScrolling.current = true;
  };

  const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    isScrolling.current = false;
    if (!isScrolling.current) {
      scrollToFix(event.nativeEvent.contentOffset.y);
    }
  };

  const scrollToFix = (y: number) => {
    const index = Math.round(y / itemHeight);
    const _y = index * itemHeight;

    if (y !== _y) {
      $scroll.current?.scrollTo({
        y: _y,
        animated: true,
      });
    }

    onChange && onChange(index);
  };

  useEffect(() => {
    const y = selectedIndex * itemHeight;
    $scroll.current?.scrollTo({
      y,
      animated: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView
      ref={$scroll}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      bounces={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScroll={e => {
        const index = Math.round(e.nativeEvent.contentOffset.y / itemHeight);
        setActiveIndex(index);
      }}
    >
      <View style={[styles.placeholder, { height: padding }]} />
      {dataSource.map((i, idx) => (
        <View key={idx} style={[styles.pickerItem, { height: itemHeight }]}>
          <Text style={[styles.pickText, activeIndex === idx && styles.activeText]}>{i}</Text>
        </View>
      ))}
      <View style={[styles.placeholder, { height: padding }]} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
  },
  highlight: {
    position: 'absolute',
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  placeholder: {
    flex: 1,
  },
  pickerItem: {
    justifyContent: 'center',
  },
  pickText: {
    fontSize: Theme.fontSizeCaption,
    color: Theme.colorTextCaption,
  },
  activeText: {
    color: Theme.colorTextParagraph,
  },
});
