## ActionSheet 操作菜单

本组件用于从底部弹出一个操作菜单，供用户选择并返回结果，所有平台都表现一致。

### 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

### 基本使用

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

### Props

| 参数            | 说明               | 类型         | 必填 | 默认值  | 可选值     |
| --------------- | ------------------ | ------------ | ---- | ------- | ---------- |
| visible         | 是否可见           | boolean      | √    | -       | true/false |
| actions         | 操作菜单子项       | ActionItem[] | √    | -       | -          |
| showCheckStatus | 是否显示选择状态   | boolean      | ×    | false   | true/false |
| checkIndex      | 选中的 index 项    | number       | ×    | -       | -          |
| checkSize       | 选中图标的 size    | number       | ×    | 24      | -          |
| checkColor      | 选中状态下标题颜色 | string       | ×    | #333333 | -          |
| cancelText      | cancel 按钮文字    | string       | ×    | 取消    | -          |

### ActionItem

| 参数     | 说明                 | 类型                | 必填 | 默认值 | 可选值     |
| -------- | -------------------- | ------------------- | ---- | ------ | ---------- |
| name     | 标题                 | string              | √    | -      | -          |
| subName  | 副标题               | string              | ×    | -      | -          |
| color    | 标题颜色             | string              | ×    | -      | -          |
| fontSize | 标题 size            | number              | ×    | -      | -          |
| disabled | 是否是 disabled 状态 | string              | ×    | -      | true/false |
| icon     | 显示图标，在标题前面 | ImageSourcePropType | ×    | -      | -          |
| iconSize | 图标大小             | number              | ×    | -      | -          |

### 事件

| 事件名      | 说明                   | 回调参数                    |
| ----------- | ---------------------- | --------------------------- |
| onClose     | 关闭回调               | -                           |
| onClickItem | 可选状态下选择项目回调 | index: number，选中的索引值 |

## Badge 徽标数

该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式

### 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

### 基本使用

```typescript
import React from 'react';
import { Badge } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Badge text={99} size="small" corner={true} dot={false} overflowCount={99} />;
};
```

### Props

| 参数          | 说明                              | 类型               | 必填 | 默认值 | 可选值     |
| ------------- | --------------------------------- | ------------------ | ---- | ------ | ---------- |
| text          | 显示的文字                        | string             | √    | -      | true/false |
| size          | 显示大小                          | 'large' \| 'small' | ×    | small  | large      |
| corner        | 是否显示在右上角，绝对定位        | boolean            | ×    | false  | true/false |
| dot           | 是否显示为一个红点                | number             | ×    | false  | true/false |
| overflowCount | 超出这个值显示为${overflowCount}+ | number             | ×    | 99     | -          |

## Button 按钮

按钮

### 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

### 基本使用

```typescript
import React from 'react';
import { Button } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Button type="primary" disabled={false} onPress={() => 1} />;
};
```

### Props

| 参数     | 说明       | 类型                                                         | 必填 | 默认值    | 可选值     |
| -------- | ---------- | ------------------------------------------------------------ | ---- | --------- | ---------- |
| style    | 样式       | Style                                                        | ×    | -         | true/false |
| type     | 类型       | 'default' \| 'primary' \| 'danger' \| 'warning' \| 'success' | ×    | 'default' | -          |
| disabled | 是否可点击 | boolean                                                      | ×    | false     | true/false |

### 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 点击回调 | -        |

## Cell 单元格

Cell 单元格一般用于一组列表的情况，比如个人中心页，设置页等

### 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

### 基本使用

```typescript
import React from 'react';
import { Cell } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Cell title="设置" />;
};
```

### Props

| 参数            | 说明                                                        | 类型                | 必填 | 默认值    | 可选值     |
| --------------- | ----------------------------------------------------------- | ------------------- | ---- | --------- | ---------- |
| style           | 样式                                                        | Style               | ×    | -         | -          |
| title           | 标题                                                        | string              | √    | -         | -          |
| label           | 副标题，标签                                                | string              | ×    | -         | -          |
| border          | 是否显示顶部边线                                            | boolean             | ×    | true      | true/false |
| centerRightText | 右侧内容是否与左侧内容垂直居中显示，默认 true，否则顶部对齐 | boolean             | ×    | true      | true/false |
| rightContent    | 右侧文案                                                    | string \| ReactNode | ×    | -         | -          |
| isLink          | 是否显示为链接形式，链接形式会在右侧显示一个箭头            | boolean             | ×    | true      | true/false |
| rightIconName   | 右侧图标名称，默认右箭头                                    | IconName(参考 Icon) | ×    | 'right'   | -          |
| rightIconSize   | 右侧图标大小                                                | number              | ×    | 24        | -          |
| rightIconColor  | 右侧图标颜色                                                | string              | ×    | '#a4a9b0' | -          |
| renderLeftIcon  | 左侧图标渲染函数                                            | () => ReactNode     | ×    | -         | -          |

### 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 点击回调 | -        |

<!-- icon template start -->

<!-- icon template end -->
