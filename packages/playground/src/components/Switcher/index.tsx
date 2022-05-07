import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated, LayoutChangeEvent } from 'react-native';

export type SwitcherProps = {
  activeIndex: number;
  list: { title: string }[];
  onChange: (index: number) => void;
};

const Switcher: React.FC<SwitcherProps> = props => {
  const { activeIndex, list, onChange } = props;
  const posAnimRef = useRef(new Animated.Value(0));
  const widthRef = useRef(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    swiper2index(activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const onLayout = (e: LayoutChangeEvent) => {
    widthRef.current = e.nativeEvent.layout.width;
    swiper2index(activeIndex, 0);
  };

  const switchItem = (index: number) => {
    if (index === activeIndex) {
      return;
    }
    onChange && onChange(index);
  };

  const swiper2index = (index: number, duration: number = 200) => {
    const val = (widthRef.current / list.length) * index;
    Animated.timing(posAnimRef.current, {
      toValue: val,
      duration,
      useNativeDriver: false,
    }).start();
  };

  if (!list || !list.length) {
    return null;
  }

  const per = 100 / list.length;

  return (
    <View style={styles.switcher}>
      <View style={styles.switcherInner} onLayout={onLayout}>
        {list.map((item, index) => {
          return (
            <Text style={styles.switcherItem} key={index} onPress={() => switchItem(index)}>
              {item.title}
            </Text>
          );
        })}
        <Animated.View style={[styles.activeBar, { width: `${per}%`, left: posAnimRef.current }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switcher: {
    borderRadius: 4,
    backgroundColor: '#eeeeef',
    padding: 4,
  },
  switcherInner: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
  },
  switcherItem: {
    position: 'relative',
    zIndex: 3,
    flex: 1,
    textAlign: 'center',
    paddingVertical: 4,
  },
  activeBar: {
    position: 'absolute',
    top: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 4,
  },
});

export default Switcher;
