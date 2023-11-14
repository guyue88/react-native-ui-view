import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StatusBar, StatusBarStyle, StyleSheet, View, Animated, Dimensions } from 'react-native';
import { Theme } from '../Styles/theme';

export type PopupProps = {
  // 是否可见
  visible: boolean;
  // 点击弹层关闭
  closeOnClickOverlay?: boolean;
  // statusbar 样式
  barStyle?: StatusBarStyle;
  // 关闭回调
  onClose?: () => void;
  // 动画开始回调
  onAnimationStart?: () => void;
  // 动画结束回调
  onAnimationEnd?: () => void;
};

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
const SCREEN_HEIGHT = WINDOW_HEIGHT + (StatusBar.currentHeight || 0);

const Popup: React.FC<PropsWithChildren<PopupProps>> = props => {
  const {
    children,
    visible,
    closeOnClickOverlay = false,
    barStyle = 'dark-content',
    onClose,
    onAnimationStart,
    onAnimationEnd,
  } = props;

  const [innerVisible, setInnerVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

  useEffect(() => {
    if (visible) {
      setInnerVisible(true);
      onAnimationStart?.();
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 700,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: SCREEN_HEIGHT,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setInnerVisible(false);
        onAnimationEnd?.();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  return (
    <Modal
      transparent
      statusBarTranslucent
      hardwareAccelerated
      visible={innerVisible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <StatusBar barStyle={barStyle} />

      <View style={styles.container}>
        <Animated.View style={[styles.animate, { top: slideAnim }]}>
          <Pressable style={styles.mask} onPress={closeOnClickOverlay ? onClose : undefined} />
          <View style={styles.content}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillMask,
  },
  animate: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  mask: {
    flex: 1,
  },
  content: {},
});

export default Popup;
