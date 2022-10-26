# ImageCropper 图片裁剪器

该组件一般用于用户头像裁剪。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | ×   |

## 基本使用

```typescript
import React from 'react';
import { ImageCropper } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <ImageCropper uri="https://xxxx.png" visible={true} />;
};
```

## Props

| 参数       | 说明                                                   | 类型                              | 必填 | 默认值 |
| ---------- | ------------------------------------------------------ | --------------------------------- | ---- | ------ |
| uri        | 需要裁剪的图标地址，仅接受链接地址                     | string                            | √    | -      |
| visible    | 是否显示裁剪弹层                                       | boolean                           | √    | false  |
| destSize   | 裁剪目标大小，裁剪完成后，会将图片缩放或者放大到该尺寸 | { width: number; height: number } | ×    | false  |
| cancelText | 取消文案                                               | string                            | ×    | 取消   |
| okText     | 确认文案                                               | string                            | ×    | 确定   |

## 事件

| 事件名    | 说明         | 回调参数                      |
| --------- | ------------ | ----------------------------- |
| onConfirm | 裁剪完成     | uri: string，裁剪后的图片地址 |
| onClose   | 关闭裁剪弹层 | -                             |
