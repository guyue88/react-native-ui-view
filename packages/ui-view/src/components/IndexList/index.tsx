import React, { ReactNode, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Anchor from './anchor';
import List from './list';

export type IndexListProps<T> = {
  // 右侧锚点列表
  indexList?: string[];
  // 左侧数据
  dataList: T[][];
  // 左侧数据渲染函数
  renderItem: (item: T, index: number) => ReactNode;
};

const getIndexList = () => {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }
  return indexList;
};
const defaultIndexList = getIndexList();

function IndexList<T>(props: IndexListProps<T>) {
  const { indexList = defaultIndexList, dataList, renderItem } = props;

  const [stickyIndex, setStickyIndex] = useState(-1);
  const [keyIndex, setKeyIndex] = useState(-1);

  return (
    <View style={styles.container}>
      <List<T>
        indexList={indexList}
        dataList={dataList}
        activeStickyIndex={stickyIndex}
        renderItem={renderItem}
        onKeyIndexChange={setKeyIndex}
      />
      <Anchor indexList={indexList} keyIndex={keyIndex} onChangeIndex={i => setStickyIndex(i)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexList;
