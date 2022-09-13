import React, { PropsWithChildren } from 'react';
import { Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../../components/Styles/theme';
import Touchable from '../Touchable';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  // 样式
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  // 是否可点
  disabled?: boolean;
  // 点击回调
  onPress?: () => void;
};

const Button: React.FC<PropsWithChildren<ButtonProps>> = props => {
  const { style, type = 'default', disabled = false, onPress, children } = props;
  const themeStyle = {
    default: styles.default,
    primary: styles.primary,
    warning: styles.warning,
    success: styles.success,
    danger: styles.danger,
  };

  return (
    <Touchable
      style={[styles.container, themeStyle[type], disabled && styles.disabled, style]}
      underlayColor={Theme.fillBody}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={[styles.text, type !== 'default' && styles.textWhite]}>{children}</Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Theme.buttonHeight,
    borderRadius: 4,
  },
  primary: {
    backgroundColor: Theme.brandPrimary,
  },
  default: {
    backgroundColor: Theme.fillBase,
    borderWidth: 0.5,
    borderColor: Theme.borderColor,
  },
  danger: {
    backgroundColor: Theme.brandError,
  },
  warning: {
    backgroundColor: Theme.brandWarning,
  },
  success: {
    backgroundColor: Theme.brandSuccess,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: Theme.colorTextBase,
    fontSize: Theme.buttonFontSize,
  },
  textWhite: {
    color: Theme.colorTextBaseInverse,
  },
});

export default Button;
