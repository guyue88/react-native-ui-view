import React from 'react';
import { View } from 'react-native';

export type SwiperItemProps = {
  // 宽度
  width?: number;
  // 当前页数
  borderRadius?: number;
};

const SwiperItem: React.FC<SwiperItemProps> = props => {
  const { width, borderRadius = 8, children } = props;

  return <View style={{ width, borderRadius, overflow: 'hidden' }}>{children}</View>;
};

export default SwiperItem;
