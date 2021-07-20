import React, { ReactNode, isValidElement, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageURISource,
  ImageRequireSource,
  TouchableWithoutFeedback,
  ImageResolvedAssetSource,
} from 'react-native';

import Badge from '../Badge';

export type TabBarIcon = ImageURISource | ImageURISource[] | ImageRequireSource | ReactNode;

export type TabItemProps = {
  // 文字
  title: string;
  // 是否被选中
  selected: boolean;
  // Icon 元素，图片或者一个ReactNode
  icon: TabBarIcon;
  // Icon 元素，图片或者一个ReactNode
  selectedIcon: TabBarIcon;
  // 显示角标，为0时不显示
  badge?: number;
  // 角标是否显示为一个红点
  dot?: boolean;
  // 被点击时的回调
  onPress?: () => void;

  // 以下部分由TabBar组件传入
  // Icon的大小
  iconSize?: number;
  // 选中时的颜色
  activeColor?: string;
  // 未选中时的颜色
  inactiveColor?: string;
};

const TabItem: React.FC<TabItemProps> = props => {
  const {
    title,
    selected = false,
    badge,
    dot = false,
    icon,
    iconSize,
    activeColor,
    inactiveColor,
    selectedIcon,
    onPress = () => 1,
  } = props;
  const renderIcon = selected ? selectedIcon : icon;
  const currentColor = selected ? activeColor : inactiveColor;

  // 提前加载图片，防止切换时导致闪动
  useEffect(() => {
    [selectedIcon, icon].forEach(image => {
      if (!isValidElement(image) && typeof image === 'string') {
        Image.prefetch(image);
      }
    });
    return () => {};
  }, [selectedIcon, icon]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tabItem}>
        <View style={styles.wrap}>
          {isValidElement(renderIcon) ? (
            <View style={{ width: iconSize, height: iconSize }}>{renderIcon}</View>
          ) : (
            <Image source={renderIcon as ImageURISource} style={{ width: iconSize, height: iconSize }} />
          )}

          <Text style={[styles.title, { color: currentColor }]}>{title}</Text>
          {badge && <Badge corner text={badge} size="small" dot={dot} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    marginTop: 4,
  },
});

export default TabItem;
