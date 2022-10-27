# TabBar 底部导航

此组件提供了自定义 tabbar 的能力，具有如下特点：

- 图标可以使用字体图标(内置图标和扩展图标)或者图片
- 可以动态切换菜单的数量以及配置
- 切换菜单之前，可以进行回调鉴权
- 可以设置角标或数字化提示
- 有时候 Modal 可能无法覆盖底部导航栏，可以配合 Portal 将 Modal 显示在底部导航栏上面

## 平台差异性说明

| ReactNative | WEB |
| ----------- | --- |
| √           | √   |

## 基本使用

```typescript
import React, { useState } from 'react';
import { TabBar, TabBarItem } from 'react-native-ui-view';

const Home: React.FC<{}> = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

const Discovery: React.FC<{}> = () => {
  return (
    <View>
      <Text>Discovery</Text>
    </View>
  );
};

const User: React.FC<{}> = () => {
  return (
    <View>
      <Text>User</Text>
    </View>
  );
};

const Demo: React.FC<{}> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabList = [
    {
      title: '首页',
      icon: homeIcon,
      selectedIcon: homeSelectedIcon,
      content: <Home />,
    },
    {
      title: '发现',
      icon: DiscoveryIcon,
      selectedIcon: DiscoverySelectedIcon,
      content: <Discovery />,
      messageCount: 1,
    },
    {
      title: '我的',
      icon: userIcon,
      selectedIcon: userSelectedIcon,
      content: <User />,
      messageCount: 1,
      isDot: true,
    },
  ];
  return (
    <TabBar iconSize={24}>
      {tabList.map((item, index) => (
        <TabBarItem
          key={index}
          title={item.title}
          icon={item.icon}
          selectedIcon={item.selectedIcon}
          selected={index === activeIndex}
          onPress={() => setActiveIndex(index)}
          badge={item.messageCount}
          dot={item.isDot}
        >
          {item.content}
        </TabBarItem>
      ))}
    </TabBar>
  );
};
```

## TabBar Props

| 参数            | 说明                | 类型                 | 必填 | 默认值  |
| --------------- | ------------------- | -------------------- | ---- | ------- |
| style           | style               | StyleProp<ViewStyle> | ×    | -       |
| height          | 高度                | number               | ×    | 50      |
| iconSize        | Icon 大小           | number               | ×    | 20      |
| activeColor     | 文字选中时的颜色    | string               | ×    | #5098FF |
| inactiveColor   | 文字未选中时的颜色  | string               | ×    | #606266 |
| backgroundColor | 背景颜色            | string               | ×    | #ffffff |
| showBorderTop   | 是否显示顶部 Border | boolean              | ×    | true    |

## TabBarItem Props

| 参数                  | 说明                               | 类型                                                                  | 必填 | 默认值 |
| --------------------- | ---------------------------------- | --------------------------------------------------------------------- | ---- | ------ |
| title                 | 文字                               | string                                                                | ×    | -      |
| selected              | 是否被选中                         | boolean                                                               | ×    | false  |
| icon                  | Icon 元素，图片或者一个 ReactNode  | ImageURISource \| ImageURISource[] \| ImageRequireSource \| ReactNode | ×    | 20     |
| selectedIcon          | Icon 元素，图片或者一个 ReactNode  | ImageURISource \| ImageURISource[] \| ImageRequireSource \| ReactNode | ×    | -      |
| badge                 | 显示角标，为 0 时不显示            | number                                                                | ×    | -      |
| dot                   | 角标是否显示为一个红点             | boolean                                                               | ×    | false  |
| convex                | 异形凸起，只适用于中间的按钮       | boolean                                                               | ×    | false  |
| convexBackgroundColor | 异形按钮的颜色，只适用于中间的按钮 | string                                                                | ×    | -      |

## 事件

| 事件名  | 说明                    | 回调参数 |
| ------- | ----------------------- | -------- |
| onPress | TabBarItem 被点击的回调 | -        |
