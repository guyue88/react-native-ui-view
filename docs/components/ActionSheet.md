# ActionSheet 操作菜单

本组件用于从底部弹出一个操作菜单，供用户选择并返回结果，所有平台都表现一致。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React, { useState } from 'react';
import { ActionSheet } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  const [showPhotoSheet, setShowPhotoSheet] = useState(false);
  return (
    <ActionSheet
      visible={showPhotoSheet}
      actions={[
        {
          name: '拍照',
        },
        {
          name: '相册',
        },
      ]}
      onClose={() => setShowPhotoSheet(false)}
      onClickItem={index => {
        console.log(index);
      }}
    />
  );
};
```

## Props

| 参数            | 说明                   | 类型                          | 必填 | 默认值   | 版本   |
| --------------- | ---------------------- | ----------------------------- | ---- | -------- | ------ |
| visible         | 是否可见               | boolean                       | √    | -        | -      |
| actions         | 操作菜单子项           | ActionItem[]                  | √    | -        | -      |
| iconCircular    | 左侧图标是否显示为圆形 | boolean                       | ×    | false    | v0.1.8 |
| align           | 内容对齐方式           | 'left' \| 'center' \| 'right' | ×    | 'center' | v0.1.8 |
| showCheckStatus | 是否显示选择状态       | boolean                       | ×    | false    | -      |
| checkIndex      | 选中的 index 项        | number                        | ×    | -        | -      |
| checkSize       | 选中图标的 size        | number                        | ×    | 24       | -      |
| checkColor      | 选中状态下标题颜色     | string                        | ×    | #333333  | -      |
| cancelText      | cancel 按钮文字        | string                        | ×    | 取消     | -      |

## ActionItem

| 参数     | 说明                 | 类型                | 必填 | 默认值 |
| -------- | -------------------- | ------------------- | ---- | ------ |
| name     | 标题                 | string              | √    | -      |
| subName  | 副标题               | string              | ×    | -      |
| color    | 标题颜色             | string              | ×    | -      |
| fontSize | 标题 size            | number              | ×    | -      |
| disabled | 是否是 disabled 状态 | string              | ×    | -      |
| icon     | 显示图标，在标题前面 | ImageSourcePropType | ×    | -      |
| iconSize | 图标大小             | number              | ×    | -      |

## 事件

| 事件名      | 说明                   | 回调参数                    |
| ----------- | ---------------------- | --------------------------- |
| onClose     | 关闭回调               | -                           |
| onClickItem | 可选状态下选择项目回调 | index: number，选中的索引值 |
