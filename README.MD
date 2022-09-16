# React Native Ui View

![npm (tag)](https://img.shields.io/npm/v/react-native-ui-view.svg)
![npm](https://img.shields.io/npm/dm/react-native-ui-view.svg)
![license](https://img.shields.io/github/license/YMFE/react-native-ui-view.svg)

react native 组件库，全面兼容 react native 生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水。

## 组件列表

- [x] ActionSheet
- [x] Badge
- [x] Button
- [x] Cell
- [x] CellGroup
- [x] Icon
- [x] ImageCropper
- [x] IndexList
- [x] Modal
- [x] Navbar
- [x] Picker
- [x] Popup
- [x] Portal
- [x] Search
- [x] Spin
- [x] Swiper
- [x] Tabbar
- [x] Toast
- [x] Touchable

## 快速开始

### 安装

```shell
# npm i react-native-ui-view --save
```

### 使用

```javascript
import React from 'react';
import { Portal } from 'react-native-ui-view';
const App: React.FC<{}> = () => {
  // Modal/Toast的函数调用方式需要使用 Portal 包裹整个应用
  return <Portal>{/* xxx */}</Portal>;
};
AppRegistry.registerComponent(appName, () => app);
```
