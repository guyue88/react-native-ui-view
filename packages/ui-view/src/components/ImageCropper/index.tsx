import React, { PropsWithChildren } from 'react';
import { Image, StyleSheet, View, Dimensions, Pressable, Text, Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Gesture, GestureDetector, gestureHandlerRootHOC } from 'react-native-gesture-handler';
import ImageEditor from '@react-native-community/image-editor';
import ImageSize from 'react-native-image-size';
import { FONT_WEIGHT, Theme } from '../Styles/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import Icon from '../Icon';
import Spin from '../Spin';
import Toast from '../Toast';

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

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const ImageCropper: React.FC<PropsWithChildren<ImageCropperProps>> = props => {
  const {
    uri,
    visible,
    destSize = { width: 500, height: 500 },
    cancelText = '取消',
    okText = '确定',
    onConfirm,
    onClose,
  } = props;
  const [imageInfo, setImageInfo] = useState({
    originWidth: 0,
    originHeight: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [rectInfo, setRectInfo] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const [loading, setLoading] = useState(false);

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const savedPositionX = useSharedValue(0);
  const savedPositionY = useSharedValue(0);

  useEffect(() => {
    (async () => {
      if (visible && uri) {
        setLoading(true);
        let { width, height, rotation } = await ImageSize.getSize(uri);

        // 安卓上，使用ios的图片，可能会有图片角度问题
        if (rotation === 90 || rotation === 270) {
          [width, height] = [height, width];
        }
        // 宽取两个中最小的一个，最小不小于0.8屏幕宽
        const max = Math.max(width, WINDOW_WIDTH);
        let w = Math.min(WINDOW_WIDTH * 0.8, Math.min(width, WINDOW_WIDTH));
        const rate = w / max;

        let h = height * rate;

        if (h > WINDOW_HEIGHT) {
          w = (w * WINDOW_HEIGHT * 0.8) / h;
          h = WINDOW_HEIGHT * 0.8;
        }
        const x = (WINDOW_WIDTH - w) / 2;
        const y = (WINDOW_HEIGHT - h) / 2;

        setImageInfo({
          originWidth: width,
          originHeight: height,
          width: w,
          height: h,
          x,
          y,
        });

        const rw = Math.min(w, h);
        const rh = (rw * destSize.height) / destSize.width;
        setRectInfo({
          width: rw,
          height: rh,
          x: (WINDOW_WIDTH - rw) / 2,
          y: (WINDOW_HEIGHT - rh) / 2,
        });
        setLoading(false);
      }
    })();
  }, [destSize.height, destSize.width, uri, visible]);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      // 不能比原图小
      if (scale.value <= 1) {
        scale.value = 1;
        savedScale.value = 1;
      } else {
        savedScale.value = scale.value;
      }
    });

  const panGesture = Gesture.Pan()
    .maxPointers(1)
    .onUpdate(e => {
      positionX.value = savedPositionX.value + e.translationX;
      positionY.value = savedPositionY.value + e.translationY;
    })
    .onEnd(() => {
      // 缩放后，每边可以用于移动的宽度
      const scaledWidth = (imageInfo.width * (scale.value - 1)) / 2;
      // 相对于缩放的实际移动值
      const translateX = positionX.value * scale.value;
      // 图片与裁剪框之间的偏移量
      const offsetX = rectInfo.x - imageInfo.x;
      // 计算后，实际每边可以用于移动的宽度
      const targetX = scaledWidth + offsetX;
      let destX = positionX.value;

      // 左边移动进了裁剪框，translateX正数是右移
      if (translateX > targetX) {
        destX = targetX / scale.value;
      } else if (-translateX > targetX) {
        // 右边移进了裁剪框
        destX = -targetX / scale.value;
      }

      positionX.value = destX;
      savedPositionX.value = destX;

      const scaledHeight = (imageInfo.height * (scale.value - 1)) / 2;
      const translateY = positionY.value * scale.value;
      const offsetY = rectInfo.y - imageInfo.y;
      const targetY = scaledHeight + offsetY;
      let destY = positionY.value;

      // 左边移动进了裁剪框
      if (translateY > targetY) {
        destY = targetY / scale.value;
      } else if (-translateY > targetY) {
        // 右边移进了裁剪框
        destY = -targetY / scale.value;
      }

      positionY.value = destY;
      savedPositionY.value = destY;
    });

  const pinchAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateX: positionX.value }, { translateY: positionY.value }],
  }));

  const onCrop = async () => {
    const scaledWidth = imageInfo.width * (scale.value - 1);
    const x = imageInfo.x - scaledWidth / 2 + positionX.value;
    const scaledHeight = imageInfo.height * (scale.value - 1);
    const y = imageInfo.y - scaledHeight / 2 + positionY.value;
    const destX = (rectInfo.x - x) / scale.value;
    const destY = (rectInfo.y - y) / scale.value;

    setLoading(true);
    const url = await ImageEditor.cropImage(uri, {
      offset: { x: destX, y: destY },
      size: {
        width: (rectInfo.width * imageInfo.originWidth) / imageInfo.width / scale.value,
        height: (rectInfo.height * imageInfo.originHeight) / imageInfo.height / scale.value,
      },
      displaySize: destSize,
    })
      .catch(error => {
        Toast.info('图片裁剪失败');
        console.error('图片裁剪失败: ', error);
      })
      .finally(() => setLoading(false));
    if (url) {
      onConfirm(url);
      onClose();
    }
  };

  const renderContent = gestureHandlerRootHOC(() => (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loading}>
          <Spin size={40} color={Theme.colorTextBaseInverse} />
        </View>
      )}
      <Animated.View style={[styles.imageWrap, { left: imageInfo.x, top: imageInfo.y }, pinchAnimStyle]}>
        <Image source={{ uri }} style={{ width: imageInfo.width, height: imageInfo.height }} />
      </Animated.View>

      <GestureDetector gesture={pinchGesture}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.gesture}>
            <View
              style={[
                styles.rect,
                {
                  width: rectInfo.width,
                  height: rectInfo.height,
                  left: rectInfo.x,
                  top: rectInfo.y,
                },
              ]}
            />

            <View style={styles.footer}>
              <Pressable hitSlop={10} onPress={onClose}>
                <Text style={styles.text}>{cancelText}</Text>
              </Pressable>
              <Pressable hitSlop={10}>
                <Icon name="undo" color={Theme.colorTextBaseInverse} size={24} />
              </Pressable>
              {/* <Pressable hitSlop={10}>
                <Icon name="rotate-left" color={Theme.colorTextBaseInverse} size={24} />
              </Pressable> */}
              <Pressable hitSlop={10} onPress={onCrop}>
                <Text style={styles.text}>{okText}</Text>
              </Pressable>
            </View>
          </View>
        </GestureDetector>
      </GestureDetector>
    </View>
  ));

  return (
    <Modal visible={visible} transparent animationType="fade" statusBarTranslucent onRequestClose={onClose}>
      {/* @ts-ignore */}
      {renderContent()}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colorTextParagraph,
    width: '100%',
    height: '100%',
  },
  loading: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrap: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
  },
  gesture: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  rect: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: Theme.borderColor,
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  text: {
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 16,
    color: Theme.colorTextBaseInverse,
  },
});
export default ImageCropper;
