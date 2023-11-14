# Popup 弹出层

弹出层容器，用于展示底部弹出层。组件只提供容器，内部内容由用户自定义，默认上半部分显示遮罩，下半部分显示内容，可以设置下半部分内容占满整个容器。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { Popup } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return (
    <Popup visible={true} closeOnClickOverlay>
      <View>
        <Text>我是弹层内容</Text>
      </View>
    </Popup>
  );
};
```

## Props

| 参数                | 说明                   | 类型           | 必填 | 默认值       |
| ------------------- | ---------------------- | -------------- | ---- | ------------ |
| visible             | 弹出层是否可见         | boolean        | √    | -            |
| closeOnClickOverlay | 点击蒙层可关闭整个弹层 | boolean        | ×    | false        |
| barStyle            | 状态栏样式             | StatusBarStyle | ×    | dark-content |

## 事件

| 事件名           | 说明         | 回调参数 |
| ---------------- | ------------ | -------- |
| onClose          | 弹层关闭回调 | -        |
| onAnimationStart | 动画开始回调 | -        |
| onAnimationEnd   | 动画结束回调 | -        |
