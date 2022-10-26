# Cell 单元格

Cell 单元格一般用于一组列表的情况，比如个人中心页，设置页等

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Cell } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Cell title="设置" />;
};
```

## Props

| 参数            | 说明                                             | 类型                | 必填 | 默认值    | 可选值     |
| --------------- | ------------------------------------------------ | ------------------- | ---- | --------- | ---------- |
| style           | 样式                                             | Style               | ×    | -         | -          |
| title           | 标题                                             | string              | √    | -         | -          |
| label           | 副标题，标签                                     | string              | ×    | -         | -          |
| border          | 是否显示顶部边线                                 | boolean             | ×    | true      | true/false |
| centerRightText | 右侧内容是否与左侧内容垂直居中显示，否则顶部对齐 | boolean             | ×    | true      | true/false |
| rightContent    | 右侧文案                                         | string \| ReactNode | ×    | -         | -          |
| isLink          | 是否显示为链接形式，链接形式会在右侧显示一个箭头 | boolean             | ×    | true      | true/false |
| rightIconName   | 右侧图标名称，默认右箭头                         | IconName(参考 Icon) | ×    | 'right'   | -          |
| rightIconSize   | 右侧图标大小                                     | number              | ×    | 24        | -          |
| rightIconColor  | 右侧图标颜色                                     | string              | ×    | '#a4a9b0' | -          |
| renderLeftIcon  | 左侧图标渲染函数                                 | () => ReactNode     | ×    | -         | -          |

## 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 点击回调 | -        |
