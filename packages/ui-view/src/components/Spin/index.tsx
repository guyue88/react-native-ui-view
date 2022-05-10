import React, { useEffect, useRef } from 'react';
import { StyleProp, ViewStyle, Animated, Easing } from 'react-native';
import { Theme } from '../../components/Styles/theme';
import Icon from '../Icon';

export type SpinProps = {
  style?: StyleProp<ViewStyle>;
  color?: string;
  size?: number;
  spinning?: boolean;
};

const Spin: React.FC<SpinProps> = props => {
  const { style, color = Theme.brandPrimary, size = 30, spinning = true } = props;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const rotate = (run: boolean) => {
    const animation = Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    });
    const loop = Animated.loop(animation, {
      iterations: -1,
    });
    if (run) {
      loop.start();
    } else {
      loop.stop();
    }
  };

  useEffect(() => {
    rotate(spinning);
  }, [spinning]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={{ width: size, height: size, transform: [{ rotate: spin }] }}>
      <Icon name="loading" size={size} color={color} style={style} />
    </Animated.View>
  );
};

export default Spin;
