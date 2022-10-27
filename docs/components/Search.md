# Search 搜索

搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Search } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Search value="双十一shopee大促" />;
};
```

## Props

| 参数             | 说明               | 类型                          | 必填 | 默认值      |
| ---------------- | ------------------ | ----------------------------- | ---- | ----------- |
| value            | 搜索值             | string                        | √    | -           |
| shape            | 形状样式           | 'round' \| 'square'           | ×    | round       |
| textAlign        | 文字对齐模式       | 'left' \| 'center' \| 'right' | ×    | left        |
| color            | icon 以及文字颜色  | string                        | ×    | #333333     |
| backgroundColor  | 背景色             | string                        | ×    | transparent |
| borderColor      | border color       | string                        | ×    | #cccccc     |
| placeholder      | placeholder        | string                        | ×    | -           |
| placeholderColor | placeholder color  | string                        | ×    | #bbbbbb     |
| showClear        | 显示清除按钮       | boolean                       | ×    | true        |
| showSearchText   | 显示右侧搜索的文字 | boolean                       | ×    | true        |
| searchText       | 搜索文字           | string                        | ×    | 搜索        |
| searchTextColor  | 搜索文字颜色       | string                        | ×    | #108ee9     |
| textInputProps   | 输入框的其他参数   | TextInputProps                | ×    | -           |
| style            | 自定义样式         | StyleProp<ViewStyle>          | ×    | -           |

## 事件

| 事件名   | 说明                 | 回调参数      |
| -------- | -------------------- | ------------- |
| onChange | value 变更回调       | value: string |
| onSearch | 搜索回调             | value: string |
| onClear  | 删除输入框文件的回调 | -             |
