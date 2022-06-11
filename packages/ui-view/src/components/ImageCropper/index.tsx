import React from 'react';
import { Image, StyleSheet, View, Dimensions, Pressable, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Gesture, GestureDetector, gestureHandlerRootHOC, PanGestureHandler } from 'react-native-gesture-handler';
import { Modal } from 'react-native';
import { FONT_WEIGHT, Theme } from '../Styles/theme';
import { useEffect } from 'react';
import { useState } from 'react';
import Icon from '../Icon';

export type ImageCropperProps = {
  uri: string;
};

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get('window');

const ImageCropper: React.FC<ImageCropperProps> = props => {
  const { uri } = props;
  const [imageInfo, setImageInfo] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const [rectSize, setReactSize] = useState({ width: 0, height: 0 });

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const onLeft = useSharedValue(true);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);

  useEffect(() => {
    Image.getSize(uri, (width: number, height: number) => {
      // 宽取 两个中最小的一个，最小不小于0.8屏幕宽
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
        width: w,
        height: h,
        x,
        y,
      });

      const size = Math.min(w, h);
      setReactSize({
        width: size,
        height: size,
      });
    });
  }, [uri]);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      console.log(111, e);
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });
  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      console.log(111, onLeft.value, e);
      if (e.numberOfPointers > 1) {
        return;
      }
      positionX.value = e.translationX;
      positionY.value = e.translationY;
    })
    .onEnd(e => {
      console.log(222, e);
      // if (e.numberOfPointers > 1) {
      //   return;
      // }
      positionX.value = withTiming(positionX.value, { duration: 100 });
      positionY.value = withTiming(positionY.value, { duration: 100 });
    });

  const pinchAnimStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateX: positionX.value }, { translateY: positionY.value }],
  }));

  const renderContent = gestureHandlerRootHOC(() => (
    <View style={styles.container}>
      <Animated.View style={[styles.imageWrap, { left: imageInfo.x, top: imageInfo.y }, pinchAnimStyle]}>
        <Image source={{ uri }} style={{ width: imageInfo.width, height: imageInfo.height }} />
      </Animated.View>

      <GestureDetector gesture={pinchGesture}>
        <GestureDetector gesture={panGesture}>
          <View style={styles.gesture}>
            <View style={styles.content}>
              <View style={[styles.rect, { width: rectSize.width, height: rectSize.height }]} />
            </View>
            <View style={styles.footer}>
              <Pressable hitSlop={10}>
                <Text style={styles.text}>取消</Text>
              </Pressable>
              <Pressable hitSlop={10}>
                <Icon name="undo" color={Theme.colorTextBaseInverse} size={24} />
              </Pressable>
              <Pressable hitSlop={10}>
                <Icon name="rotate-left" color={Theme.colorTextBaseInverse} size={24} />
              </Pressable>
              <Pressable hitSlop={10}>
                <Text style={styles.text}>确定</Text>
              </Pressable>
            </View>
          </View>
        </GestureDetector>
      </GestureDetector>
    </View>
  ));

  return (
    <Modal visible transparent animationType="fade" statusBarTranslucent onRequestClose={() => {}}>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rect: {
    borderWidth: 1,
    borderColor: Theme.borderColor,
  },
  footer: {
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
