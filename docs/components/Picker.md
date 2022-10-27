# Picker 选择器

此选择器用于单列，多列，多列联动的选择场景，一般用于城市选择，日期选择。  
多列使用时，切换列数据，可以通过修改其他列的数据来实现联动。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Picker } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return (
    <Picker
      visible={true}
      dataSource={[
        ['北京', '上海', '广东'],
        ['朝阳区', '东城区'],
      ]}
      selectedIndex={[0, 0]}
    />
  );
};
```

## Props

| 参数                | 说明                   | 类型           | 必填 | 默认值       |
| ------------------- | ---------------------- | -------------- | ---- | ------------ |
| visible             | 弹层是否可见           | boolean        | √    | -            |
| barStyle            | 状态栏样式             | StatusBarStyle | ×    | dark-content |
| dataSource          | 数据源，二维数组       | string[][]     | √    | -            |
| selectedIndex       | 选中的数据项的索引     | number[]       | √    | -            |
| itemHeight          | 单项高度               | number         | ×    | 40           |
| showToolbar         | 是否显示顶部控制栏     | boolean        | ×    | true         |
| title               | 控制栏标题             | string         | ×    | -            |
| cancelText          | 控制栏取消文案         | string         | ×    | 取消         |
| cancelColor         | 控制栏取消文案的颜色   | string         | ×    | #666666      |
| confirmText         | 控制栏确认文案         | string         | ×    | 确定         |
| confirmColor        | 控制栏确认文案的颜色   | string         | ×    | #1284d6      |
| backgroundColor     | 背景颜色               | string         | ×    | -            |
| closeOnClickOverlay | 点击蒙层可关闭整个弹层 | boolean        | ×    | false        |

## 事件

| 事件名    | 说明                               | 回调参数                |
| --------- | ---------------------------------- | ----------------------- |
| onChange  | 选中项变化回调                     | selectedIndex: number[] |
| onClose   | 弹层关闭回调                       | -                       |
| onConfirm | 确定选中项，仅显示顶部控制栏时可用 | selectedIndex: number[] |
