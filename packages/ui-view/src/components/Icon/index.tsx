import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import SvgUri from '../../lib/react-native-svg-uri';
import svgs from '../../assets/svg';

export type IconProps = {
  // icon名字
  name: string;
  // 颜色
  color?: string;
  // 大小
  size?: number;
  // 点击回调
  onPress?: () => void;
  // style
  style?: StyleProp<ViewStyle>;
};

const Icon: React.FC<IconProps> = props => {
  const { name, color = '#666', size = 20, onPress, style = {} } = props;
  let svgXmlData = (svgs as any)[name];

  if (!svgXmlData) {
    throw new Error(`No Icon Named ${name} Was Found!`);
  }
  return (
    <Pressable onPress={onPress} style={style}>
      <SvgUri width={size} height={size} svgXmlData={svgXmlData} fill={color} />
    </Pressable>
  );
};

export default Icon;
