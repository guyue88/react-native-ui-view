import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
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
};

const Navbar: React.FC<IconProps> = props => {
  const { name, color = '#666', size = 20, onPress } = props;
  let svgXmlData = svgs[name];

  if (!svgXmlData) {
    throw new Error(`No Icon Named ${name} Was Found!`);
  }
  return (
    <Pressable onPress={onPress}>
      <SvgUri width={size} height={size} svgXmlData={svgXmlData} fill={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Navbar;
