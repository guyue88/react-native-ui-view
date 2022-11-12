# React Native Ui View

![npm (tag)](https://img.shields.io/npm/v/react-native-ui-view.svg)
![npm](https://img.shields.io/npm/dm/react-native-ui-view.svg)

React Native Ui View is a react native component library, which is fully compatible with the react native ecological framework. Comprehensive components and convenient tools will make you feel at ease。

## Components List

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

## Installation

```shell
npm i react-native-ui-view --save
```

## Usage

```javascript
import React from 'react';
import { Portal } from 'react-native-ui-view';
const App: React.FC<{}> = () => {
  // Portal provides a host for Modal/Toast Component.
  return <Portal>{/* xxx */}</Portal>;
};
AppRegistry.registerComponent(appName, () => app);
```

## Documentation

- [中文文档](https://guyue88.github.io/react-native-ui-view/)

## License

MIT
