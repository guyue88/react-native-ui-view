import React, { useRef, useState, useEffect, useMemo, ReactNode } from 'react';
import { StyleSheet, View, ScrollView, LayoutChangeEvent, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import CellGroup from '../Cell/cellGroup';

export type ListProps<T> = {
  indexList: string[];
  dataList: T[][];
  activeStickyIndex: number;
  renderItem: (item: T, index: number) => ReactNode;
  onKeyIndexChange: (index: number) => void;
};

type RenderItem<T> = {
  type: 'anchor' | 'item';
  name?: string;
  data?: T;
};

type KeyIndexMap = {
  index: number;
  offset: number;
};

type LayoutMap = {
  height: number;
};

function List<T>(props: ListProps<T>) {
  const { indexList, dataList, renderItem, activeStickyIndex, onKeyIndexChange } = props;

  const [stickyIndex, setStickyIndex] = useState(-1);

  const $scroll = useRef<ScrollView | null>(null);
  // 记录每个标头的index位置
  const keyIndexMap = useRef<KeyIndexMap[]>([]);
  // 记录每一项的高度
  const layoutMap = useRef<LayoutMap[]>([]);
  // 延迟渲染的定时器
  const timer = useRef<NodeJS.Timeout | null>(null);
  // 是否是外部滑动导致的滚动
  const isTouchingByAnchor = useRef<boolean>(false);

  // 清除定时器
  useEffect(() => {
    return () => {
      timer.current && clearTimeout(timer.current);
    };
  }, []);

  // 外部标头变化导致滚动
  useEffect(() => {
    if (activeStickyIndex >= 0) {
      isTouchingByAnchor.current = true;
      setActiveGroupByIndex(activeStickyIndex);
    }
  }, [activeStickyIndex]);

  const handleDataList = (data: T[][]) => {
    let res: RenderItem<T>[] = [];
    let index = 0;

    data.forEach((item, idx) => {
      // 要注意不要赋值，否则会导致引用错误
      keyIndexMap.current.push({ index, offset: 0 });

      const name = indexList[idx];
      res.push({ type: 'anchor', name });
      item.forEach(i => {
        res.push({ type: 'item', data: i });
        index++;
      });
      index++;
    });

    return res;
  };

  const setActiveGroupByIndex = (index: number) => {
    const currentKeyMap = keyIndexMap.current[index];

    if (currentKeyMap && currentKeyMap.index !== undefined) {
      $scroll?.current?.scrollTo({
        y: currentKeyMap.offset,
        animated: false,
      });

      // 延迟设置stickyHeader，减少渲染，防止卡顿
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        isTouchingByAnchor.current = false;
        setStickyIndex(currentKeyMap.index);
      }, 300);
    }
  };

  const onItemLayout = (event: LayoutChangeEvent, index: number, isLast: boolean) => {
    layoutMap.current[index] = { height: event.nativeEvent.layout.height };
    if (isLast) {
      const indexMap = keyIndexMap.current;
      const layout = layoutMap.current;

      indexMap.forEach((item, idx) => {
        const prev = idx === 0 ? undefined : indexMap[idx - 1];
        const start = prev ? prev.index : 0;
        let offset = prev ? prev.offset : 0;

        for (let i = start; i < item.index; i++) {
          const each = layout[i];
          offset += each.height;
        }
        keyIndexMap.current[idx] = {
          ...item,
          offset,
        };
      });
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isTouchingByAnchor.current) {
      return false;
    }
    const { y } = event.nativeEvent.contentOffset;
    const indexMap = keyIndexMap.current;
    let _stickyIndex = -1;
    let keyIndex = -1;

    for (let i = 0; i < indexMap.length; i++) {
      const item = indexMap[i];
      const { offset, index } = item;
      if (offset <= y) {
        _stickyIndex = index;
        keyIndex = i;
      } else {
        break;
      }
    }
    if (_stickyIndex !== -1) {
      setStickyIndex(_stickyIndex);
      onKeyIndexChange(keyIndex);
    }
  };

  const finalDataList = handleDataList(dataList);
  const listLength = finalDataList.length;

  return useMemo(() => {
    return (
      <ScrollView
        ref={$scroll}
        style={styles.content}
        removeClippedSubviews={false}
        scrollEventThrottle={8}
        stickyHeaderIndices={[stickyIndex]}
        onScroll={onScroll}
      >
        {finalDataList.map((item, index) => {
          return (
            <View key={index} onLayout={event => onItemLayout(event, index, index === listLength - 1)}>
              {item.type && item.type === 'anchor' ? (
                <CellGroup key={index} title={item.name} />
              ) : (
                renderItem(item.data as T, index)
              )}
            </View>
          );
        })}
      </ScrollView>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataList, stickyIndex]);
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});

export default List;
