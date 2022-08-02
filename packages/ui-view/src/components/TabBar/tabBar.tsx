/* eslint-disable react-native/no-inline-styles */
import React, { Children, cloneElement, PropsWithChildren } from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

export type TabBarProps = {
  // style
  style?: StyleProp<ViewStyle>;
  // 高度，默认50
  height?: number;
  // Icon大小
  iconSize?: number;
  // 文字选中时的颜色
  activeColor?: string;
  // 文字未选中时的颜色
  inactiveColor?: string;
  // 背景颜色
  backgroundColor?: string;
  // 是否显示顶部Border
  showBorderTop?: boolean;
};

const TabBar: React.FC<PropsWithChildren<TabBarProps>> = props => {
  const {
    style = {},
    height = 50,
    iconSize = 20,
    activeColor = '#5098FF',
    inactiveColor = '#606266',
    showBorderTop = true,
    backgroundColor = '#FFFFFF',
    children,
  } = props;

  const getPanes = (showContent: boolean) => {
    let selectedIndex = 0;
    [].concat(children as any).forEach((child: any, idx: number) => {
      if (child.props.selected) {
        selectedIndex = idx;
      }
    });

    const newChildren: any[] = [];
    Children.map(children, (child: any, idx) => {
      if (showContent && selectedIndex === idx) {
        newChildren.push(child.props.children);
      } else {
        newChildren.push(
          cloneElement(child, {
            key: idx,
            activeColor,
            inactiveColor,
            iconSize,
            convexBackgroundColor: backgroundColor,
          }),
        );
      }
    });

    if (showContent) {
      return newChildren.filter((_, i) => i === selectedIndex);
    }

    return newChildren;
  };

  return (
    <View style={[styles.page]}>
      {/* 渲染的内容 */}
      <View style={[{ flex: 1, paddingBottom: height }, style]}>{getPanes(true)}</View>
      {/* tabbar item */}
      <View style={[styles.tabBar, { backgroundColor, height }, showBorderTop && styles.borderTop]}>
        {getPanes(false)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  borderTop: {
    borderTopColor: '#E4E7ED',
    borderTopWidth: 1,
  },
});

export default TabBar;
