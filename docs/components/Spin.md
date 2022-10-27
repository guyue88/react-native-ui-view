# Spin 加载动画

此组件为一个小动画，一般用于正在加载的动画。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Spin } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Spin />;
};
```

## Props

| 参数     | 说明         | 类型                 | 必填 | 默认值  |
| -------- | ------------ | -------------------- | ---- | ------- |
| style    | 自定义样式   | StyleProp<ViewStyle> | ×    | -       |
| color    | 颜色         | string               | ×    | #108ee9 |
| size     | 大小         | number               | ×    | 30      |
| spinning | 是否在动画中 | boolean              | ×    | #true   |
