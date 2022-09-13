import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';

export type ImageCropperProps = {
  // 需要裁剪的图标地址，仅接受链接地址
  uri: string;
  // 是否可见
  visible: boolean;
  // 裁剪目标大小
  destSize?: { width: number; height: number };
  // 取消文案，默认“取消”
  cancelText?: string;
  // 确认文案，默认“确定”
  okText?: string;
  // 确认回调
  onConfirm: (uri: string) => void;
  // 关闭回调
  onClose: () => void;
};

const ImageCropper: React.FC<PropsWithChildren<ImageCropperProps>> = () => {
  return <View />;
};

export default ImageCropper;
