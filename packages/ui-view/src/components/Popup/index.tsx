import React, { PropsWithChildren } from 'react';
import { Modal, Pressable, StatusBar, StyleSheet, View } from 'react-native';
import { Theme } from '../Styles/theme';

export type PopupProps = {
  visible: boolean;
  closeOnClickOverlay?: boolean;
  barStyle?: 'light-content' | 'dark-content';
  onClose?: () => void;
};

const Popup: React.FC<PropsWithChildren<PopupProps>> = props => {
  const { onClose, children, visible, closeOnClickOverlay = false, barStyle = 'dark-content' } = props;
  return (
    <Modal
      transparent
      statusBarTranslucent
      hardwareAccelerated
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <StatusBar barStyle={barStyle} />

      <View style={styles.container}>
        <Pressable style={styles.mask} onPress={closeOnClickOverlay ? onClose : undefined} />
        <View style={styles.main}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mask: {
    flex: 1,
    backgroundColor: Theme.fillMask,
  },
  main: {},
});

export default Popup;
