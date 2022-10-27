# Toast 消息提示

Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的 API。
Toast 不以组件形式使用，主要以 API 调用模式提供

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Text } from 'react-native';
import { Toast, Touchable } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  const showToast = () => {
    Toast.show('success', 'Toast 内容');
  };

  return (
    <Touchable onPress={showToast}>
      <Text>Toast</Text>
    </Touchable>
  );
};
```

# 类型申明

```typescript
type ToastType = 'loading' | 'success' | 'fail' | 'info';
```

## Toast.show(params)

可以使用任意类型的消息提示。

### 参数

| 参数     | 说明                                            | 类型      | 必填 | 默认值 |
| -------- | ----------------------------------------------- | --------- | ---- | ------ |
| type     | 类型                                            | ToastType | √    | -      |
| content  | 消息内容                                        | string    | √    | -      |
| duration | 展示时间，展示一段时间后，自动隐藏，传 0 不隐藏 | number    | ×    | 3000   |
| mask     | 是否显示蒙层，防止穿透，蒙层无背景色            | boolean   | ×    | true   |

## Toast.loading(params)

显示一个 loading 类型的消息提示，不自动消失，需要自行控制消息的隐藏。

### 参数

| 参数    | 说明                                 | 类型    | 必填 | 默认值 |
| ------- | ------------------------------------ | ------- | ---- | ------ |
| content | 消息内容                             | string  | √    | -      |
| mask    | 是否显示蒙层，防止穿透，蒙层无背景色 | boolean | ×    | true   |

### 返回值

- Promise<number>，返回一个标记，可以使用 Toast.hideLoading 使标记对应消息隐藏。

## Toast.hideLoading(params)

隐藏一个 loading 类型的消息，需要传入对应标记。

### 参数

| 参数 | 说明     | 类型   | 必填 | 默认值 |
| ---- | -------- | ------ | ---- | ------ |
| key  | 消息标记 | number | √    | -      |

## Toast.success(params)

显示一个 success 类型的消息提示，为 Toast.show 的简易模式，推荐使用。

### 参数

| 参数     | 说明                                            | 类型    | 必填 | 默认值 |
| -------- | ----------------------------------------------- | ------- | ---- | ------ |
| content  | 消息内容                                        | string  | √    | -      |
| duration | 展示时间，展示一段时间后，自动隐藏，传 0 不隐藏 | number  | ×    | 3000   |
| mask     | 是否显示蒙层，防止穿透，蒙层无背景色            | boolean | ×    | true   |

## Toast.fail(params)

显示一个 fail 类型的消息提示，为 Toast.show 的简易模式，推荐使用。

### 参数

| 参数     | 说明                                            | 类型    | 必填 | 默认值 |
| -------- | ----------------------------------------------- | ------- | ---- | ------ |
| content  | 消息内容                                        | string  | √    | -      |
| duration | 展示时间，展示一段时间后，自动隐藏，传 0 不隐藏 | number  | ×    | 3000   |
| mask     | 是否显示蒙层，防止穿透，蒙层无背景色            | boolean | ×    | true   |

## Toast.info(params)

显示一个 info 类型的消息提示，为 Toast.show 的简易模式，推荐使用。

### 参数

| 参数     | 说明                                            | 类型    | 必填 | 默认值 |
| -------- | ----------------------------------------------- | ------- | ---- | ------ |
| content  | 消息内容                                        | string  | √    | -      |
| duration | 展示时间，展示一段时间后，自动隐藏，传 0 不隐藏 | number  | ×    | 3000   |
| mask     | 是否显示蒙层，防止穿透，蒙层无背景色            | boolean | ×    | true   |
