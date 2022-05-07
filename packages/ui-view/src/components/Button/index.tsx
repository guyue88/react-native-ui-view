import React, { isValidElement } from 'react';
import { Text, StyleSheet, StyleProp, ViewStyle, TouchableHighlight } from 'react-native';
import { Theme } from '../../components/Styles/theme';

export type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'success';
  disabled?: boolean;
  onPress?: () => void;
};

const Button: React.FC<ButtonProps> = props => {
  const { style, type = 'default', disabled = false, onPress, children } = props;
  const themeStyle = {
    default: styles.default,
    primary: styles.primary,
    warning: styles.warning,
    success: styles.success,
    danger: styles.danger,
  };

  return (
    <TouchableHighlight
      style={[styles.container, themeStyle[type], disabled && styles.disabled, style]}
      activeOpacity={0.6}
      underlayColor={Theme.fillBody}
      onPress={disabled ? undefined : onPress}
    >
      <Text style={[styles.text, type !== 'default' && styles.textWhite]}>{children}</Text>
    </TouchableHighlight>
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
