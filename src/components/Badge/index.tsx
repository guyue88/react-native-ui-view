import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLORS } from '../Styles/theme';

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
          corner ? styles.corner : '',
          size === 'large' ? styles.large : styles.small,
          dot ? styles.dot : '',
        ]}
      >
        <Text>{showText}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  badge: {
    color: COLORS.white,
  },
  corner: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  large: {},
  small: {},
  dot: {},
});

export default Badge;
