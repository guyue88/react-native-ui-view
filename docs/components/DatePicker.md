# DatePicker 日期选择器

基于`Picker`实现的日期选择器。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React, { useState } from 'react';
import { DatePicker } from 'react-native-ui-view';
const [showCalendar, setShowCalendar] = useState(false);

const Demo: React.FC<{}> = () => {
  return (
    <DatePicker
      visible={showCalendar}
      yearRange={[1960, dayjs().year()]}
      initialDate={+dayjs()}
      onClose={() => setShowCalendar(false)}
      onConfirm={timestamp => {
        // ...
      }}
    />
  );
};
```

## Props

| 参数        | 说明                 | 类型     | 必填 | 默认值 |
| ----------- | -------------------- | -------- | ---- | ------ |
| visible     | 弹层是否可见         | boolean  | √    | -      |
| yearRange   | 显示的年份区间       | number[] | √    | -      |
| initialDate | 初始选定日期，时间戳 | number   | √    | -      |

## 事件

| 事件名    | 说明                                             | 回调参数          |
| --------- | ------------------------------------------------ | ----------------- |
| onClose   | 弹层关闭回调                                     | -                 |
| onConfirm | 确定选中项，数值为时间戳，仅显示顶部控制栏时可用 | timestamp: number |
