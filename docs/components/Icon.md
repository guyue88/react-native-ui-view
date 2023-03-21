# Icon 图标

基于字体的图标集，包含了大多数常见场景的图标

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Icon } from 'react-native-ui-view';

const Demo: React.FC<{}> = () => {
  return <Icon name="right" />;
};
```

## Props

| 参数  | 说明                    | 类型   | 必填 | 默认值  |
| ----- | ----------------------- | ------ | ---- | ------- |
| style | 样式                    | Style  | ×    | -       |
| name  | icon 名字，见示例图标集 | string | √    | -       |
| color | 颜色                    | string | ×    | 20      |
| size  | 大小                    | string | ×    | #666666 |

## 事件

| 事件名  | 说明     | 回调参数 |
| ------- | -------- | -------- |
| onPress | 点击回调 | -        |

## 图标集

<!-- icon template start -->
<div style="width: 900px;display: grid;grid-template-columns: repeat(6, 16.67%);grid-auto-rows: 100px;border-left: 1px solid #ccc;border-top: 1px solid #ccc; ">
  <div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/add-circle.svg" width="36" />
  <div>
    add-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/add.svg" width="36" />
  <div>
    add
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/adjust.svg" width="36" />
  <div>
    adjust
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/align-center.svg" width="36" />
  <div>
    align-center
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/align-left.svg" width="36" />
  <div>
    align-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/align-right.svg" width="36" />
  <div>
    align-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-double-left.svg" width="36" />
  <div>
    arrow-double-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-double-right.svg" width="36" />
  <div>
    arrow-double-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-down-filling.svg" width="36" />
  <div>
    arrow-down-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-down.svg" width="36" />
  <div>
    arrow-down
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-left-circle.svg" width="36" />
  <div>
    arrow-left-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-left-filling.svg" width="36" />
  <div>
    arrow-left-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-left.svg" width="36" />
  <div>
    arrow-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-right-circle.svg" width="36" />
  <div>
    arrow-right-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-right-filling.svg" width="36" />
  <div>
    arrow-right-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-right.svg" width="36" />
  <div>
    arrow-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-up-circle.svg" width="36" />
  <div>
    arrow-up-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-up-filling.svg" width="36" />
  <div>
    arrow-up-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/arrow-up.svg" width="36" />
  <div>
    arrow-up
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/ashbin.svg" width="36" />
  <div>
    ashbin
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/attachment.svg" width="36" />
  <div>
    attachment
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/back.svg" width="36" />
  <div>
    back
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/bad.svg" width="36" />
  <div>
    bad
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/bell-fill.svg" width="36" />
  <div>
    bell-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/bell.svg" width="36" />
  <div>
    bell
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/bottom.svg" width="36" />
  <div>
    bottom
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/browse.svg" width="36" />
  <div>
    browse
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/calendar.svg" width="36" />
  <div>
    calendar
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/camera.svg" width="36" />
  <div>
    camera
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/caps-lock.svg" width="36" />
  <div>
    caps-lock
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/caps-unlock-filling.svg" width="36" />
  <div>
    caps-unlock-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/chart-bar.svg" width="36" />
  <div>
    chart-bar
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/chart-pie.svg" width="36" />
  <div>
    chart-pie
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/check-item-filling.svg" width="36" />
  <div>
    check-item-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/check-item.svg" width="36" />
  <div>
    check-item
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/check.svg" width="36" />
  <div>
    check
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/clock-filling.svg" width="36" />
  <div>
    clock-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/close-circle-fill.svg" width="36" />
  <div>
    close-circle-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/close-circle.svg" width="36" />
  <div>
    close-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/close.svg" width="36" />
  <div>
    close
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/code.svg" width="36" />
  <div>
    code
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/colum-height.svg" width="36" />
  <div>
    colum-height
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/column-3.svg" width="36" />
  <div>
    column-3
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/column-4.svg" width="36" />
  <div>
    column-4
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/column-horizontal.svg" width="36" />
  <div>
    column-horizontal
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/column-vertical.svg" width="36" />
  <div>
    column-vertical
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/comment-filling.svg" width="36" />
  <div>
    comment-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/comment.svg" width="36" />
  <div>
    comment
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/complete.svg" width="36" />
  <div>
    complete
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/copy.svg" width="36" />
  <div>
    copy
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/cry-filling.svg" width="36" />
  <div>
    cry-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/cry.svg" width="36" />
  <div>
    cry
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/customer-service.svg" width="36" />
  <div>
    customer-service
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/cut.svg" width="36" />
  <div>
    cut
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/data-view.svg" width="36" />
  <div>
    data-view
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/decline-filling.svg" width="36" />
  <div>
    decline-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/delete-filling.svg" width="36" />
  <div>
    delete-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/delete.svg" width="36" />
  <div>
    delete
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/direction-down-circle.svg" width="36" />
  <div>
    direction-down-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/direction-down.svg" width="36" />
  <div>
    direction-down
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/direction-left.svg" width="36" />
  <div>
    direction-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/direction-right.svg" width="36" />
  <div>
    direction-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/direction-up.svg" width="36" />
  <div>
    direction-up
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/discount.svg" width="36" />
  <div>
    discount
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/double-left.svg" width="36" />
  <div>
    double-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/double-right.svg" width="36" />
  <div>
    double-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/down.svg" width="36" />
  <div>
    down
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/download.svg" width="36" />
  <div>
    download
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/drag.svg" width="36" />
  <div>
    drag
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/dynamic-filling.svg" width="36" />
  <div>
    dynamic-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/edit-filling.svg" width="36" />
  <div>
    edit-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/edit.svg" width="36" />
  <div>
    edit
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/electronics.svg" width="36" />
  <div>
    electronics
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/elipsis.svg" width="36" />
  <div>
    elipsis
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/email.svg" width="36" />
  <div>
    email
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/error.svg" width="36" />
  <div>
    error
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/explain.svg" width="36" />
  <div>
    explain
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/export.svg" width="36" />
  <div>
    export
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/eye-close.svg" width="36" />
  <div>
    eye-close
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/eye.svg" width="36" />
  <div>
    eye
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/fabulous.svg" width="36" />
  <div>
    fabulous
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/favorite-filling.svg" width="36" />
  <div>
    favorite-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/favorite.svg" width="36" />
  <div>
    favorite
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file-add.svg" width="36" />
  <div>
    file-add
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file-common-filling.svg" width="36" />
  <div>
    file-common-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file-common.svg" width="36" />
  <div>
    file-common
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file-delete.svg" width="36" />
  <div>
    file-delete
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file-open.svg" width="36" />
  <div>
    file-open
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/file.svg" width="36" />
  <div>
    file
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/film.svg" width="36" />
  <div>
    film
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/filter-fill.svg" width="36" />
  <div>
    filter-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/filter-filling.svg" width="36" />
  <div>
    filter-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/filter.svg" width="36" />
  <div>
    filter
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/folder-close.svg" width="36" />
  <div>
    folder-close
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/folder-filling.svg" width="36" />
  <div>
    folder-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/forward.svg" width="36" />
  <div>
    forward
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/fullscreen-expand-filling.svg" width="36" />
  <div>
    fullscreen-expand-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/fullscreen-expand.svg" width="36" />
  <div>
    fullscreen-expand
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/fullscreen-shrink.svg" width="36" />
  <div>
    fullscreen-shrink
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/good.svg" width="36" />
  <div>
    good
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/help-filling.svg" width="36" />
  <div>
    help-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/help.svg" width="36" />
  <div>
    help
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/hide.svg" width="36" />
  <div>
    hide
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/history-filling.svg" width="36" />
  <div>
    history-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/history.svg" width="36" />
  <div>
    history
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/home-filling.svg" width="36" />
  <div>
    home-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/home.svg" width="36" />
  <div>
    home
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/image-text.svg" width="36" />
  <div>
    image-text
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/import.svg" width="36" />
  <div>
    import
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/intermediate-filling.svg" width="36" />
  <div>
    intermediate-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/keyboard-26.svg" width="36" />
  <div>
    keyboard-26
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/keyboard-9.svg" width="36" />
  <div>
    keyboard-9
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/layers.svg" width="36" />
  <div>
    layers
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/layout-filling.svg" width="36" />
  <div>
    layout-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/layout.svg" width="36" />
  <div>
    layout
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/left.svg" width="36" />
  <div>
    left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/line.svg" width="36" />
  <div>
    line
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/link.svg" width="36" />
  <div>
    link
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/loading.svg" width="36" />
  <div>
    loading
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/lock.svg" width="36" />
  <div>
    lock
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/map-filling.svg" width="36" />
  <div>
    map-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/map.svg" width="36" />
  <div>
    map
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/meh-filling.svg" width="36" />
  <div>
    meh-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/meh.svg" width="36" />
  <div>
    meh
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/menu.svg" width="36" />
  <div>
    menu
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/message.svg" width="36" />
  <div>
    message
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/mic.svg" width="36" />
  <div>
    mic
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/minus-circle-fill.svg" width="36" />
  <div>
    minus-circle-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/minus-circle.svg" width="36" />
  <div>
    minus-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/minus-square.svg" width="36" />
  <div>
    minus-square
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/minus.svg" width="36" />
  <div>
    minus
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/mobile-phone.svg" width="36" />
  <div>
    mobile-phone
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/modular.svg" width="36" />
  <div>
    modular
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/more.svg" width="36" />
  <div>
    more
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/move.svg" width="36" />
  <div>
    move
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/navigation.svg" width="36" />
  <div>
    navigation
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/news-filling.svg" width="36" />
  <div>
    news-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/notification-filling.svg" width="36" />
  <div>
    notification-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/notification.svg" width="36" />
  <div>
    notification
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/operation.svg" width="36" />
  <div>
    operation
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/pad.svg" width="36" />
  <div>
    pad
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/pdf.svg" width="36" />
  <div>
    pdf
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/picture-filling.svg" width="36" />
  <div>
    picture-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/picture.svg" width="36" />
  <div>
    picture
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/pin.svg" width="36" />
  <div>
    pin
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/play.svg" width="36" />
  <div>
    play
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/plus-circle-fill.svg" width="36" />
  <div>
    plus-circle-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/plus-circle.svg" width="36" />
  <div>
    plus-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/plus-square.svg" width="36" />
  <div>
    plus-square
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/plus.svg" width="36" />
  <div>
    plus
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/print.svg" width="36" />
  <div>
    print
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/prompt-fill.svg" width="36" />
  <div>
    prompt-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/prompt-filling.svg" width="36" />
  <div>
    prompt-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/prompt.svg" width="36" />
  <div>
    prompt
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/question-circle-fill.svg" width="36" />
  <div>
    question-circle-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/question-circle.svg" width="36" />
  <div>
    question-circle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/question.svg" width="36" />
  <div>
    question
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/refresh.svg" width="36" />
  <div>
    refresh
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/right.svg" width="36" />
  <div>
    right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/rise-filling.svg" width="36" />
  <div>
    rise-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/rotate-left.svg" width="36" />
  <div>
    rotate-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/run-in.svg" width="36" />
  <div>
    run-in
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/run-up.svg" width="36" />
  <div>
    run-up
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/save.svg" width="36" />
  <div>
    save
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/scanning.svg" width="36" />
  <div>
    scanning
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/search.svg" width="36" />
  <div>
    search
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/security.svg" width="36" />
  <div>
    security
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/select.svg" width="36" />
  <div>
    select
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/send.svg" width="36" />
  <div>
    send
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/setting-filling.svg" width="36" />
  <div>
    setting-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/setting.svg" width="36" />
  <div>
    setting
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/share.svg" width="36" />
  <div>
    share
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/sign-out.svg" width="36" />
  <div>
    sign-out
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/skip.svg" width="36" />
  <div>
    skip
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/smile-filling.svg" width="36" />
  <div>
    smile-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/smile.svg" width="36" />
  <div>
    smile
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/sort-down.svg" width="36" />
  <div>
    sort-down
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/sort-menu.svg" width="36" />
  <div>
    sort-menu
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/sort-up.svg" width="36" />
  <div>
    sort-up
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/sorting.svg" width="36" />
  <div>
    sorting
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/stop.svg" width="36" />
  <div>
    stop
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/success-filling.svg" width="36" />
  <div>
    success-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/success.svg" width="36" />
  <div>
    success
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/survey.svg" width="36" />
  <div>
    survey
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/swap.svg" width="36" />
  <div>
    swap
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/switch-filling.svg" width="36" />
  <div>
    switch-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/switch.svg" width="36" />
  <div>
    switch
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/task-filling.svg" width="36" />
  <div>
    task-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/task.svg" width="36" />
  <div>
    task
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/telephone-out.svg" width="36" />
  <div>
    telephone-out
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/telephone.svg" width="36" />
  <div>
    telephone
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/text.svg" width="36" />
  <div>
    text
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/time.svg" width="36" />
  <div>
    time
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/to-top.svg" width="36" />
  <div>
    to-top
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/toggle-left.svg" width="36" />
  <div>
    toggle-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/toggle-right.svg" width="36" />
  <div>
    toggle-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/top-filling.svg" width="36" />
  <div>
    top-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/top.svg" width="36" />
  <div>
    top
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/training.svg" width="36" />
  <div>
    training
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/undo.svg" width="36" />
  <div>
    undo
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/unlock.svg" width="36" />
  <div>
    unlock
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/up.svg" width="36" />
  <div>
    up
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/upload.svg" width="36" />
  <div>
    upload
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/user-filling.svg" width="36" />
  <div>
    user-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/user.svg" width="36" />
  <div>
    user
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/vertical-align-bottom.svg" width="36" />
  <div>
    vertical-align-bottom
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/vertical-align-middle.svg" width="36" />
  <div>
    vertical-align-middle
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/vertical-align-top.svg" width="36" />
  <div>
    vertical-align-top
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/vertical-left.svg" width="36" />
  <div>
    vertical-left
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/vertical-right.svg" width="36" />
  <div>
    vertical-right
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/video.svg" width="36" />
  <div>
    video
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/voice.svg" width="36" />
  <div>
    voice
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/warning-filling.svg" width="36" />
  <div>
    warning-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/warning.svg" width="36" />
  <div>
    warning
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/wechat-fill.svg" width="36" />
  <div>
    wechat-fill
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/work-filling.svg" width="36" />
  <div>
    work-filling
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/work.svg" width="36" />
  <div>
    work
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/zoom-in.svg" width="36" />
  <div>
    zoom-in
  </div>
</div>
<div style="border-right: 1px solid #ccc;border-bottom: 1px solid #ccc;display: flex;flex-direction: column;align-items: center;justify-content: center;">
  <img src="https://gitee.com/sp-luoqiang/react-native-ui-view/raw/master/packages/ui-view/src/assets/svg/zoom-out.svg" width="36" />
  <div>
    zoom-out
  </div>
</div>
</div>
<!-- icon template end -->
