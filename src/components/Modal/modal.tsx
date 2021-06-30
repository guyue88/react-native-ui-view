import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Theme } from '../Styles/theme';

export type Props = {
  title: string;
  content: string;
  align?: 'center' | 'left' | 'right';
  cancelText?: string;
  cancelColor?: string;
  confirmText?: string;
  confirmColor?: string;
  showCancel?: boolean;
  mask?: boolean;

  visible: boolean;
  animationType?: 'fade' | 'none' | 'slide';
  onConfirm?: () => void;
  onClose?: () => void;
};

const ModalHost: React.FC<Props> = props => {
  const {
    title,
    content,
    confirmColor,
    cancelColor,
    align = 'left',
    cancelText = '取消',
    confirmText = '确定',
    showCancel = true,
    mask = true,

    visible,
    animationType = 'fade',
    onClose = () => 1,
    onConfirm = () => 1,
  } = props;

  return (
    <Modal statusBarTranslucent transparent visible={visible} animationType={animationType} onRequestClose={onClose}>
      <Pressable style={[styles.container, mask ? styles.mask : undefined]} onPress={onClose}>
        <View style={styles.main}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.content}>
            <Text style={[styles.contentText, { textAlign: align }]}>{content}</Text>
          </View>
          <View style={styles.operation}>
            {showCancel && (
              <Text
                style={[styles.button, styles.cancelText, cancelColor ? { color: cancelColor } : undefined]}
                onPress={onClose}
              >
                {cancelText}
              </Text>
            )}
            <Text
              style={[
                styles.button,
                styles.confirmText,
                showCancel && styles.buttonBorder,
                confirmColor ? { color: confirmColor } : undefined,
              ]}
              onPress={onConfirm}
            >
              {confirmText}
            </Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: Theme.modalZIndex,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mask: {
    backgroundColor: Theme.fillMask,
  },
  main: {
    width: '80%',
    backgroundColor: Theme.fillBase,
    borderRadius: Theme.radiusMd,
  },
  title: {
    marginTop: Theme.vSpacingLg,
  },
  titleText: {
    textAlign: 'center',
    color: Theme.colorTextBase,
    fontSize: Theme.modalFontSizeHeading,
  },
  content: {
    padding: Theme.hSpacingLg,
  },
  contentText: {
    fontSize: Theme.fontSizeBase,
    color: Theme.colorTextParagraph,
  },
  operation: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: Theme.borderColorBase,
    borderTopWidth: Theme.borderWidthSm,
  },
  button: {
    flex: 1,
    fontSize: Theme.modalButtonFontSize,
    height: Theme.modalButtonHeight,
    lineHeight: Theme.modalButtonHeight,
    textAlign: 'center',
  },
  buttonBorder: {
    borderLeftColor: Theme.borderColorBase,
    borderLeftWidth: Theme.borderWidthSm,
  },
  cancelText: {
    color: Theme.colorTextSecondary,
  },
  confirmText: {
    color: Theme.colorLink,
  },
});

export default ModalHost;
