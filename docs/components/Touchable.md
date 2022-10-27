# Touchable 可点元素

封装后的 TouchableHighlight，使用默认灰色样式，提供一个点击灰底 0.6 透明度的点按效果。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Text } from 'react-native';
import { Touchable } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return (
    <Touchable>
      <Text>我是按钮</Text>
    </Touchable>
  );
};
```

## Props

| 参数          | 说明                       | 类型                 | 必填 | 默认值  |
| ------------- | -------------------------- | -------------------- | ---- | ------- |
| style         | 标题                       | StyleProp<ViewStyle> | ×    | -       |
| disabled      | disabled 状态              | boolean              | ×    | false   |
| underlayColor | 底部颜色                   | string               | ×    | #dddddd |
| activeOpacity | 激活透明度                 | number               | ×    | 0.6     |
| hitSlop       | 触摸便捷，用于扩大点击范围 | Insets \| number     | ×    | 10      |

## 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 触摸回调 | -        |
