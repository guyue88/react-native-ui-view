# Picker 选择器

此选择器用于单列，多列，多列联动的选择场景，一般用于城市选择，日期选择。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Navbar } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Navbar text={99} size="small" corner={true} dot={false} overflowCount={99} />;
};
```

## Props

| 参数             | 说明                                 | 类型                  | 必填 | 默认值       |
| ---------------- | ------------------------------------ | --------------------- | ---- | ------------ |
| title            | 标题                                 | string                | √    | -            |
| titleSize        | 标题文字大小                         | number                | ×    | 17           |
| titleBold        | 标题是否加粗                         | boolean               | ×    | false        |
| titleColor       | 标题文字颜色                         | string                | ×    | #333333      |
| height           | 导航栏高度                           | number                | ×    | 42           |
| showBack         | 是否显示返回按钮                     | number                | ×    | false        |
| backIconName     | 返回按钮 Icon 的名字，参考 Icon 组件 | string                | ×    | left         |
| backIconSize     | 返回按钮 Icon 的大小                 | number                | ×    | 22           |
| backIconColor    | 返回按钮 Icon 的颜色                 | string                | ×    | #333333      |
| backText         | 返回按钮的文字                       | string                | ×    | 返回         |
| backTextStyle    | 返回按钮文字的样式                   | TextStyle             | ×    | -            |
| backgroundColor  | 背景颜色                             | string                | ×    | -            |
| barStyle         | StatusBar 的 barStyle                | StatusBarStyle        | ×    | dark-content |
| showBorderBottom | 是否展示底部 border                  | boolean               | ×    | true         |
| renderLeft       | 自定义左侧内容                       | () => React.ReactNode | ×    | -            |
| renderRight      | 自定义右侧内容                       | () => React.ReactNode | ×    | -            |

## 事件

| 事件名 | 说明                 | 回调参数 |
| ------ | -------------------- | -------- |
| onBack | 返回按钮被点击的回调 | -        |
