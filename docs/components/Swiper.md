# Swiper 轮播图

该组件一般用于导航轮播，广告展示等场景，可开箱即用，具有如下特点：

- 自定义指示器模式，可配置指示器样式
- 可配置显示标题，涵盖不同的应用场景
- 具有设置加载状态和嵌入视频的能力，功能齐全丰富

注：该组件基于 ScrollView 实现，由于 ScrollView 在 android 上不支持垂直方向分页，所以 Swiper 组件暂不支持垂直分页。

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React from 'react';
import { Image, Dimensions } from 'react-native';
import { Swiper, SwiperItem } from 'react-native-ui-view';

const { width: WINDOW_WIDTH } = Dimensions.get('window');

const Demo: React.FC<{}> = () => {
  const bannerList = [
    'https://img.qiuzhihu.cn/im/app/avatar/1.jpeg',
    'https://img.qiuzhihu.cn/im/app/avatar/2.jpeg',
    'https://img.qiuzhihu.cn/im/app/avatar/3.jpeg',
    'https://img.qiuzhihu.cn/im/app/avatar/4.jpeg',
  ];
  return;
  <Swiper width={WINDOW_WIDTH} borderRadius={10} current={1}>
    {bannerList.map((item, index) => {
      return (
        <SwiperItem key={index}>
          <Image source={item.image} />
        </SwiperItem>
      );
    })}
  </Swiper>;
};
```

## Props

| 参数              | 说明                           | 类型                                                                                      | 必填 | 默认值       |
| ----------------- | ------------------------------ | ----------------------------------------------------------------------------------------- | ---- | ------------ |
| width             | 宽度                           | number                                                                                    | √    | -            |
| current           | 当前页数                       | number                                                                                    | √    | 0            |
| indicatorMode     | 指示器的类型                   | 'round' \| 'rect' \| 'dot' \| 'number' \| 'none'                                          | ×    | round        |
| indicatorPosition | 指示器位置                     | 'topLeft' \| 'topCenter' \| 'topRight' \| 'bottomCenter' \| 'bottomLeft' \| 'bottomRight' | ×    | bottomCenter |
| autoplay          | 自动播放                       | boolean                                                                                   | ×    | false        |
| interval          | 播放间隔                       | number                                                                                    | ×    | 2500         |
| borderRadius      | 圆角值，用于设置整个容器的圆角 | number                                                                                    | ×    | 8            |
| backgroundColor   | 背景颜色                       | string                                                                                    | ×    | transparent  |

## 事件

| 事件名   | 说明     | 回调参数      |
| -------- | -------- | ------------- |
| onChange | 翻页回调 | index: number |
