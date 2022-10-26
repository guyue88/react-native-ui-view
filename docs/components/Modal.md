# Modal 模态框

模态框，非官方无内容的全屏模态框，模态框封装后，用于弹出提示或者需要点击确认的弹窗。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Modal, Portal } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Modal visible={true} title="弹窗" content="我是弹窗内容" />;
};
```

## API 调用

```typescript
import React from 'react';
import { Modal } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  useEffect(()=> {
    showModal();
  },[]);

  const showModal = async () => {
    const { confirm } = await Modal.show('弹窗','我是弹窗内容',{});
    console.log(confirm);
  }

  return <View>;
};
```

**注意：使用 Modal 或者 Toast 的 API 调用方式 ，需要整个应用被 Portal 组件包裹。**

```typescript
import React from 'react';
import { AppRegistry } from 'react-native';
import { Portal } from 'react-native-ui-view';

const App: React.FC<{}> = () => {
  return <Portal>{/* xxx */}</Portal>;
};
AppRegistry.registerComponent('appName', () => app);
```

## Props

| 参数          | 说明                 | 类型                    | 必填 | 默认值  |
| ------------- | -------------------- | ----------------------- | ---- | ------- |
| visible       | 浮窗是否可见         | boolean                 | √    | false   |
| title         | 类型标题             | string                  | √    | -       |
| content       | 内容                 | string \| ReactNode     | √    | -       |
| align         | 内容对齐方式         | center \| left \| right | ×    | left    |
| showCancel    | 是否显示取消按钮     | string                  | ×    | true    |
| cancelText    | 取消按钮的文案       | string                  | ×    | 取消    |
| cancelColor   | 取消按钮的颜色       | string                  | ×    | #a4a9b0 |
| confirmText   | 确定按钮的文案       | string                  | ×    | 确定    |
| confirmColor  | 确定按钮的颜色       | string                  | ×    | #108ee9 |
| mask          | 是否显示蒙层         | boolean                 | ×    | true    |
| maskClosable  | 点击蒙层是否可以关闭 | boolean                 | ×    | false   |
| animationType | 浮窗呈现动画         | fade \| none \| slide   | ×    | fade    |

## 事件

| 事件名    | 说明                                                     | 回调参数 |
| --------- | -------------------------------------------------------- | -------- |
| onConfirm | 用户点击确认或取消的回调                                 | -        |
| onClose   | 用户点击关闭的回调，包括点返回按钮、蒙层以及 cancel 按钮 | -        |
