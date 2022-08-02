import React, { PropsWithChildren } from 'react';
import { StyleProp, TouchableHighlight, ViewStyle } from 'react-native';
import { Theme } from '../Styles/theme';

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Pressable: React.FC<PropsWithChildren<Props>> = props => {
  const { style, onPress, children } = props;
  return (
    <TouchableHighlight underlayColor={Theme.fillTap} activeOpacity={0.6} onPress={onPress} style={style}>
      {children}
    </TouchableHighlight>
  );
};

export default Pressable;
