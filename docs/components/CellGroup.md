# CellGroup 单元格组

CellGroup 单元格组用于带有标题的一组列表的情况，比如个人中心页，设置页等，需要与 Cell 组件配合使用

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Cell, CellGroup } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return (
    <CellGroup title="账号与安全">
      <Cell title="头像" isLink />
      <Cell title="手机号码" isLink />
      <Cell title="微信号" isLink />
    </CellGroup>
  );
};
```

## Props

| 参数            | 说明   | 类型   | 必填 | 默认值 |
| --------------- | ------ | ------ | ---- | ------ |
| title           | 标题   | string | ×    | -      |
| backgroundColor | 背景色 | string | ×    | -      |
