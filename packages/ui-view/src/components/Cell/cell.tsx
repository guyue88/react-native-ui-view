import React, { ReactNode } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle, TouchableHighlight } from 'react-native';
import { Theme } from '../../components/Styles/theme';
import Icon from '../Icon';

type WrapProps = {
  clickable?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export type CellProps = WrapProps & {
  title: string;
  label?: string;
  value?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  renderIcon?: () => ReactNode;
  border?: boolean;
  centerRightText?: boolean;
  isLink?: boolean;
  rightIconName?: string;
};

const WithWrap: React.FC<WrapProps> = props => {
  const { children, clickable, style, onPress } = props;

  if (clickable) {
    return (
      <TouchableHighlight style={style} activeOpacity={0.6} underlayColor={Theme.fillBody} onPress={onPress}>
        <>{children}</>
      </TouchableHighlight>
    );
  }
  return <View style={style}>{children}</View>;
};

const Cell: React.FC<CellProps> = props => {
  const {
    title,
    label,
    value,
    iconName,
    iconSize = 24,
    iconColor = Theme.colorTextGray,
    renderIcon,
    border = true,
    centerRightText = true,
    isLink,
    rightIconName = 'right',
    clickable,
    style,
    onPress,
  } = props;

  return (
    <WithWrap style={[styles.container, border && styles.border, style]} clickable={clickable} onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.titleWrap}>
          {renderIcon || iconName ? (
            <View style={styles.iconWrap}>
              {renderIcon ? renderIcon() : !!iconName && <Icon name={iconName} size={iconSize} color={iconColor} />}
            </View>
          ) : null}

          <Text style={styles.titleText}>{title}</Text>
        </View>
        {!!label && (
          <View style={styles.titleLabelWrap}>
            <Text numberOfLines={1} style={styles.titleLabel}>
              {label}
            </Text>
          </View>
        )}
      </View>
      <View style={{ alignSelf: centerRightText ? 'center' : 'flex-start' }}>
        {value && <Text>{title}</Text>}
        {isLink && <Icon name={rightIconName} size={24} color={Theme.colorTextGray} />}
      </View>
    </WithWrap>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  border: {
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: 1,
  },
  left: {
    flex: 1,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    marginRight: 6,
  },
  titleText: {
    fontSize: 16,
    color: Theme.colorTextParagraph,
  },
  titleLabelWrap: {
    marginTop: 4,
  },
  titleLabel: {
    fontSize: 12,
    color: Theme.colorTextCaption,
  },
});

export default Cell;
