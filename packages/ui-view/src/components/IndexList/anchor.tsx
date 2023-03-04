import React, { useEffect, useRef, useState, useMemo, PropsWithChildren } from 'react';
import { View, Text, StyleSheet, GestureResponderEvent, StatusBar, Platform } from 'react-native';
import { Theme } from '../../components/Styles/theme';

export type AnchorProps = {
  indexList: string[];
  keyIndex: number;
  onChangeIndex: (index: number) => void;
};

const ANCHOR_SIZE = 50;

const Anchor: React.FC<PropsWithChildren<AnchorProps>> = props => {
  const { indexList, keyIndex, onChangeIndex } = props;
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isTouching, setIsTouching] = useState(false);

  const $container = useRef<View | null>(null);
  const listTop = useRef(0);
  const listHeight = useRef(0);
  const listItemHeight = useRef(0);

  const { length } = indexList;

  // 初始化坐标
  useEffect(() => {
    if ($container.current) {
      $container.current.measureInWindow((x, y, w, h) => {
        // 安卓测量没有包括 StatusBar，修复一下
        let fixHeight = 0;
        if (Platform.OS === 'android') {
          fixHeight = StatusBar.currentHeight || 0;
        }
        listTop.current = (y || 0) + fixHeight;
        listHeight.current = h || 0;
      });
    }
  }, []);

  // 内容滚动导致标头变化
  useEffect(() => {
    if (keyIndex >= 0) {
      setActiveIndex(keyIndex);
    }
  }, [keyIndex]);

  // 获取当前滑动到哪个字母
  const getIndexListIndex = (pageY: number) => {
    if (pageY < listTop.current) {
      return -1;
    }
    if (pageY > listTop.current + listHeight.current) {
      return length - 1;
    }
    return Math.floor((pageY - listTop.current) / listItemHeight.current);
  };

  const onTouchStart = (event: GestureResponderEvent) => {
    if (!event.nativeEvent.touches.length) return;
    setIsTouching(true);
    const currentIndex = getIndexListIndex(event.nativeEvent.pageY);
    setActiveIndex(currentIndex);
    onChangeIndex(currentIndex);
  };

  const onTouchMove = (event: GestureResponderEvent) => {
    if (!event.nativeEvent.touches.length) return;
    if (!isTouching) {
      setIsTouching(true);
    }
    const currentIndex = getIndexListIndex(event.nativeEvent.pageY);
    setActiveIndex(currentIndex);
    onChangeIndex(currentIndex);
  };

  const onTouchEnd = () => {
    setTimeout(() => {
      setIsTouching(false);
    }, 300);
  };

  const showAnchor = isTouching && activeIndex >= 0;
  const anchorTop = showAnchor
    ? listItemHeight.current * activeIndex + listItemHeight.current / 2 - ANCHOR_SIZE / 2
    : 0;

  return useMemo(() => {
    return (
      <View style={styles.indexListWrap}>
        <View
          ref={$container}
          removeClippedSubviews={false}
          style={styles.indexList}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {indexList.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <View
                style={[styles.indexListItem, isActive && styles.activeItem]}
                key={item}
                onLayout={index === 0 ? event => (listItemHeight.current = event.nativeEvent.layout.height) : undefined}
              >
                <Text style={[styles.indexListItemText, isActive && styles.activeItemText]}>{item}</Text>
              </View>
            );
          })}
          {showAnchor && (
            <View style={[styles.anchor, { top: anchorTop }]}>
              <Text style={styles.anchorText}>{indexList[activeIndex]}</Text>
            </View>
          )}
        </View>
      </View>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexList, activeIndex, showAnchor]);
};

const styles = StyleSheet.create({
  indexListWrap: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  anchor: {
    position: 'absolute',
    right: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: ANCHOR_SIZE,
    height: ANCHOR_SIZE,
    borderTopLeftRadius: ANCHOR_SIZE / 2,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: ANCHOR_SIZE / 2,
    borderBottomRightRadius: ANCHOR_SIZE / 2,
    transform: [{ rotate: '45deg' }],
    backgroundColor: Theme.fillDisabled,
  },
  anchorText: {
    fontSize: 26,
    color: Theme.colorTextBaseInverse,
    transform: [{ rotate: '-45deg' }],
    marginTop: -4,
  },
  indexList: {
    paddingHorizontal: 6,
  },
  indexListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 18,
    height: 18,
  },
  indexListItemText: {
    color: Theme.colorTextGray,
    fontSize: 11,
  },
  activeItem: {
    backgroundColor: Theme.brandPrimary,
    borderRadius: 30,
  },
  activeItemText: {
    color: Theme.colorTextBaseInverse,
  },
});

export default Anchor;
