# IndexList 索引列表

一般用于类似微信联系人页面的索引列表。

## IndexList

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { StyleSheet, SafeAreaView, View, Image } from 'react-native';
import { Theme, Navbar, IndexList, Cell } from 'react-native-ui-view';

const getIndexList = () => {
  const list = [];
  const charCodeOfA = 'A'.charCodeAt(0);
  for (let i = 0; i < 26; i++) {
    list.push(String.fromCharCode(charCodeOfA + i));
  }
  return list;
};
const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const INDEX_LIST = getIndexList();
const URLS = [
  'https://img.qiuzhihu.cn/im/app/avatar/1.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/2.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/3.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/4.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/5.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/6.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/7.jpeg',
  'https://img.qiuzhihu.cn/im/app/avatar/8.jpeg',
];
const NAMES = [
  '勇往无敌',
  '疯狂的迪飙',
  '磊爱可',
  '梦幻梦幻梦',
  '枫中飘瓢',
  '飞翔天使',
  '曾经第一',
  '追风幻影族长',
  '麦小姐',
  '胡格罗雅',
  'Red磊磊',
  '乐乐立立',
  '青龙爆风',
  '跑跑卡叮车',
  '山里狼',
  'supersonic超',
];

type DataItem = {
  name: string;
  url: string;
};

const IndexListPage = () => {
  const navigation = useNavigation();

  const getItemList = () => {
    return INDEX_LIST.map(() => {
      const arr = [];
      for (let i = 0; i < 10; i++) {
        arr.push({
          name: NAMES[getRandomInt(0, NAMES.length - 1)],
          url: URLS[getRandomInt(0, URLS.length - 1)],
        });
      }
      return arr;
    });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.main}>
        <IndexList<DataItem>
          dataList={getItemList()}
          renderItem={(item, index) => {
            return (
              <Cell
                key={index}
                style={styles.cell}
                title={item.name}
                renderLeftIcon={() => <Image source={{ uri: item.url }} style={styles.avatar} />}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillBody,
  },
  main: {
    flex: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  cell: {
    backgroundColor: '#fff',
  },
});
```

## Props

| 参数       | 说明                                                             | 类型                                  | 必填 | 默认值 |
| ---------- | ---------------------------------------------------------------- | ------------------------------------- | ---- | ------ |
| dataList   | 左侧数据，二维数组，可以传泛型，一维闪婚徐要跟锚点集合的顺序对应 | T[][]                                 | √    | -      |
| indexList  | 右侧锚点列表，默认 A-Z 的字母合集                                | string[]                              | ×    | -      |
| renderItem | 左侧单行数据渲染函数                                             | (item: T, index: number) => ReactNode | √    | -      |
