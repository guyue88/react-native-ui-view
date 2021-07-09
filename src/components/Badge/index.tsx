import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Theme } from '../Styles/theme';

export type BadgeProps = {
  // 显示的文字
  text: string | number;
  // 显示大小
  size?: 'large' | 'small';
  // 是否显示在右上角，绝对定位
  corner?: boolean;
  // 是否显示为一个红点
  dot?: boolean;
  // 超出这个值显示为99+
  overflowCount?: number;
};

const Badge: React.FC<BadgeProps> = props => {
  const { text, size = 'small', corner = false, dot = false, overflowCount = 99 } = props;

  const isNumber = !Number.isNaN(text);
  let showText = text;

  if (isNumber) {
    showText = +text > overflowCount ? `${overflowCount}+` : text;
  }

  const cls: any[] = [styles.badge];
  if (size === 'large') {
    cls.push(styles.large);
  } else {
    cls.push(styles.small);
  }
  if (dot) {
    cls.push(styles.dot);
  }
  if (corner) {
    cls.push(styles.corner);
    if (dot) {
      cls.push(styles.dotCorner);
    } else if (size === 'large') {
      cls.push(styles.largeCorner);
    } else {
      cls.push(styles.smallCorner);
    }
  }

  return (
    (!!showText || corner) && (
      <View style={cls}>
        {!dot && <Text style={[styles.text, size === 'large' ? styles.largeText : styles.smallText]}>{showText}</Text>}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  badge: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.fillRed,
  },
  corner: {
    position: 'absolute',
  },
  text: {
    color: Theme.colorTextBaseInverse,
    textAlignVertical: 'top',
  },
  large: {
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  largeCorner: {
    top: -8,
    right: -18,
  },
  largeText: {
    fontSize: 12,
  },
  small: {
    borderRadius: 12,
    paddingHorizontal: 5,
  },
  smallCorner: {
    top: -6,
    right: -12,
  },
  smallText: {
    fontSize: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    paddingHorizontal: 0,
  },
  dotCorner: {
    top: -3,
    right: -3,
  },
});

export default Badge;
