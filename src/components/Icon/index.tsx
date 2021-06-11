import React from 'react';
import { StyleSheet, View } from 'react-native';
import SvgUri from '../../lib/react-native-svg-uri';
import svgs from '../../assets/svg';

type Props = {
  name: string;
  color?: string;
  size?: number;
};

const Navbar: React.FC<Props> = props => {
  const { name, color = '#666', size = 20 } = props;
  let svgXmlData = svgs[name];

  if (!svgXmlData) {
    throw new Error(`No Icon Named ${name} Was Found!`);
  }
  return <SvgUri width={size} height={size} svgXmlData={svgXmlData} fill={color} />;
};

const styles = StyleSheet.create({
  container: {},
});

export default Navbar;
