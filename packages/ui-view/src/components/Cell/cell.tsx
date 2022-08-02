import React, { PropsWithChildren, ReactNode } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle } from 'react-native';
import { Theme } from '../../components/Styles/theme';
import Icon from '../Icon';
import Touchable from '../Touchable';

type WrapProps = {
  clickable?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export type CellProps = WrapProps & {
  title: string;
  label?: string; // 副标题
  value?: string;
  border?: boolean;
  centerRightText?: boolean;

  rightIconName?: string;
  rightIconSize?: number;
  rightIconColor?: string;

  isLink?: boolean;
  renderLeftIcon?: () => ReactNode;
};

const WithWrap: React.FC<PropsWithChildren<WrapProps>> = props => {
  const { children, clickable, style, onPress } = props;

  if (clickable) {
    return (
      <Touchable style={style} underlayColor={Theme.fillBody} onPress={onPress}>
        <>{children}</>
      </Touchable>
    );
  }
  return <View style={style}>{children}</View>;
};

const Cell: React.FC<CellProps> = props => {
  const {
    title,
    label,
    value,
    border = true,

    isLink,
    centerRightText = true,

    rightIconName = 'right',
    rightIconSize = 24,
    rightIconColor = Theme.colorTextSecondary,
    clickable,
    style,
    onPress,
    renderLeftIcon,
  } = props;

  return (
    <WithWrap style={[styles.container, border && styles.border, style]} clickable={clickable} onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.titleWrap}>
          {renderLeftIcon ? <View style={styles.iconWrap}>{renderLeftIcon()}</View> : null}

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
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ alignSelf: centerRightText ? 'center' : 'flex-start' }}>
        {value && <Text>{title}</Text>}
        {isLink && <Icon name={rightIconName} size={rightIconSize} color={rightIconColor} />}
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
    borderBottomColor: Theme.borderLightColor,
    borderBottomWidth: 0.5,
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
