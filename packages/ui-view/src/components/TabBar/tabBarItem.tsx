import React, { ReactNode, isValidElement, useEffect, PropsWithChildren } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageURISource,
  ImageRequireSource,
  TouchableWithoutFeedback,
} from 'react-native';

import Badge from '../Badge';

export type TabBarIcon = ImageURISource | ImageURISource[] | ImageRequireSource | ReactNode;

export type TabBarItemProps = {
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
  // 异形凸起，只适用于中间的按钮
  convex?: boolean;
  // 被点击时的回调
  onPress?: () => void;

  // 以下参数可以由Tabbar传入
  // Icon的大小
  iconSize?: number;
  // 选中时的颜色
  activeColor?: string;
  // 未选中时的颜色
  inactiveColor?: string;
  // y异形按钮的颜色，默认由Tabbar传入
  convexBackgroundColor?: string;
};

const TabBarItem: React.FC<PropsWithChildren<TabBarItemProps>> = props => {
  const {
    title,
    selected = false,
    badge,
    convex = false,
    dot = false,
    icon,
    iconSize = 20,
    activeColor,
    inactiveColor,
    selectedIcon,
    convexBackgroundColor,
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

  const iconWrapSize = convex ? 56 : iconSize;
  const iconStyle = [
    { width: iconWrapSize, height: iconWrapSize },
    convex && { ...styles.convex, backgroundColor: convexBackgroundColor },
  ];
  const iconImageSize = convex ? iconSize * 1.2 : iconSize;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.tabBarItem}>
        <View style={styles.wrap}>
          <View style={iconStyle}>
            {isValidElement(renderIcon) ? (
              <>{renderIcon}</>
            ) : (
              <Image source={renderIcon as ImageURISource} style={{ width: iconImageSize, height: iconImageSize }} />
            )}
          </View>
          {/* 有异形突出时，留一个占位空间 */}
          {convex && <View style={{ width: iconSize, height: iconSize }} />}

          <Text style={[styles.title, { color: currentColor }]}>{title}</Text>
          {badge && <Badge corner text={badge} size="small" dot={dot} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tabBarItem: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  convex: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -25,
    borderRadius: 28,
    padding: 10,
  },
  title: {
    fontSize: 13,
    marginTop: 4,
  },
});

export default TabBarItem;
