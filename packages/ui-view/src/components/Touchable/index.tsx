import React, { PropsWithChildren } from 'react';
import { Insets, StyleProp, TouchableHighlight, ViewStyle } from 'react-native';
import { Theme } from '../Styles/theme';

export type TouchableProps = {
  // 样式
  style?: StyleProp<ViewStyle>;
  // disabled状态
  disabled?: boolean;
  // 底部颜色
  underlayColor?: string;
  // 激活透明度
  activeOpacity?: number;
  // 触摸便捷
  hitSlop?: Insets | number;
  // 触摸回调
  onPress?: () => void;
};

const Touchable: React.FC<PropsWithChildren<TouchableProps>> = props => {
  const {
    style,
    onPress,
    disabled = false,
    children,
    underlayColor = Theme.fillTap,
    activeOpacity = 0.6,
    hitSlop = 10,
  } = props;

  let slop: Insets = {};

  if (typeof hitSlop === 'number') {
    slop = {
      top: hitSlop,
      right: hitSlop,
      bottom: hitSlop,
      left: hitSlop,
    };
  } else {
    slop = hitSlop;
  }

  return (
    <TouchableHighlight
      disabled={disabled}
      underlayColor={underlayColor}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={style}
      hitSlop={slop}
    >
      {children}
    </TouchableHighlight>
  );
};

export default Touchable;
