import React, { PropsWithChildren } from 'react';
import { StyleProp, TouchableHighlight, ViewStyle } from 'react-native';
import { Theme } from '../Styles/theme';

export type TouchableProps = {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  underlayColor?: string;
  activeOpacity?: number;
  onPress?: () => void;
};

const Touchable: React.FC<PropsWithChildren<TouchableProps>> = props => {
  const { style, onPress, disabled = false, children, underlayColor = Theme.fillTap, activeOpacity = 0.6 } = props;
  return (
    <TouchableHighlight
      disabled={disabled}
      underlayColor={underlayColor}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={style}
    >
      {children}
    </TouchableHighlight>
  );
};

export default Touchable;
