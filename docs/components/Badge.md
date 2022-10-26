# Badge 徽标数

该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Badge } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Badge text={99} size="small" corner={true} dot={false} overflowCount={99} />;
};
```

## Props

| 参数          | 说明                              | 类型           | 必填 | 默认值 |
| ------------- | --------------------------------- | -------------- | ---- | ------ |
| text          | 显示的文字                        | string         | √    | -      |
| size          | 显示大小                          | large \| small | ×    | small  |
| corner        | 是否显示在右上角，绝对定位        | boolean        | ×    | false  |
| dot           | 是否显示为一个红点                | number         | ×    | false  |
| overflowCount | 超出这个值显示为${overflowCount}+ | number         | ×    | 99     |
