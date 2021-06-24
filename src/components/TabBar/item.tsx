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

export type Props = {
  title: string;
  selected: boolean;
  icon: TabBarIcon;
  selectedIcon: TabBarIcon;
  badge?: number;
  dot?: boolean;
  onPress?: () => void;

  iconSize?: number;
  activeColor?: string;
  inactiveColor?: string;
};

const TabItem: React.FC<Props> = props => {
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
      if (!isValidElement(image)) {
        Image.resolveAssetSource(image as ImageResolvedAssetSource);
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    position: 'relative',
  },
  title: {
    fontSize: 13,
    marginTop: 4,
  },
});

export default TabItem;
