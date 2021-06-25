import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Theme } from '../Styles/theme';

export type Props = {
  text: string | number;
  size?: 'large' | 'small';
  corner?: boolean;
  dot?: boolean;
  overflowCount?: number;
};

const Badge: React.FC<Props> = props => {
  const { text, size = 'small', corner = false, dot = false, overflowCount = 99 } = props;

  const isNumber = !Number.isNaN(text);
  let showText = text;

  if (isNumber) {
    showText = +text > overflowCount ? `${overflowCount}+` : text;
  }

  return (
    !!showText && (
      <View
        style={[
          styles.badge,
          size === 'large' ? styles.large : styles.small,
          corner ? styles.corner : {},
          dot ? styles.dot : {},
        ]}
      >
        {!dot && <Text style={[styles.text, size === 'large' ? styles.largeText : styles.smallText]}>{showText}</Text>}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  text: {
    color: Theme.colorTextBaseInverse,
  },
  badge: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.fillRed,
  },
  corner: {
    position: 'absolute',
  },
  large: {
    top: -3,
    right: -18,
    borderRadius: 10,
    paddingHorizontal: 7,
  },
  largeText: {
    fontSize: 12,
  },
  small: {
    top: -2,
    right: -12,
    borderRadius: 12,
    paddingHorizontal: 5,
  },
  smallText: {
    fontSize: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    paddingHorizontal: 0,
    top: -3,
    right: -3,
  },
});

export default Badge;
