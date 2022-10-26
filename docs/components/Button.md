# Button 按钮

按钮

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Button } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Button type="primary" disabled={false} onPress={() => 1} />;
};
```

## Props

| 参数     | 说明       | 类型                                                         | 必填 | 默认值    | 可选值     |
| -------- | ---------- | ------------------------------------------------------------ | ---- | --------- | ---------- |
| style    | 样式       | Style                                                        | ×    | -         | true/false |
| type     | 类型       | 'default' \| 'primary' \| 'danger' \| 'warning' \| 'success' | ×    | 'default' | -          |
| disabled | 是否可点击 | boolean                                                      | ×    | false     | true/false |

## 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 点击回调 | -        |
