import React, { isValidElement, PropsWithChildren, ReactNode } from 'react';
import { Modal, StyleSheet, Text, View, Pressable } from 'react-native';
import Touchable from '../Touchable';
import { Theme } from '../Styles/theme';

export type ModalProps = {
  // 标题
  title: string;
  // 内容
  content: string | ReactNode;
  // 对齐方式
  align?: 'center' | 'left' | 'right';
  // 是否显示取消按钮
  showCancel?: boolean;
  // 取消按钮的文案
  cancelText?: string;
  // 取消按钮的颜色
  cancelColor?: string;
  // 确定按钮的文案
  confirmText?: string;
  // 确定按钮的颜色
  confirmColor?: string;
  // 是否显示蒙层
  mask?: boolean;
  // 点击蒙层是否可以关闭
  maskClosable?: boolean;
  // 浮窗是否可见
  visible: boolean;
  // 浮窗呈现动画
  animationType?: 'fade' | 'none' | 'slide';
  // 用户点击确认的回调
  onConfirm?: () => void;
  // 用户点击关闭的回调
  onClose?: () => void;
};

const ModalHost: React.FC<PropsWithChildren<ModalProps>> = props => {
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
    maskClosable = false,

    visible,
    animationType = 'fade',
    onClose = () => 1,
    onConfirm = () => 1,
  } = props;

  return (
    <Modal statusBarTranslucent transparent visible={visible} animationType={animationType} onRequestClose={onClose}>
      <Pressable style={[styles.container, mask ? styles.mask : undefined]} onPress={() => maskClosable && onClose()}>
        <Pressable style={styles.main} onPress={e => e.stopPropagation()}>
          {!!title && (
            <View style={styles.title}>
              <Text style={styles.titleText}>{title}</Text>
            </View>
          )}
          <View style={styles.content}>
            {isValidElement(content) ? (
              content
            ) : (
              <Text style={[styles.contentText, { textAlign: align }]}>{content}</Text>
            )}
          </View>
          <View style={styles.operation}>
            {showCancel && (
              <Touchable style={styles.button} onPress={onClose}>
                <Text style={[styles.cancelText, cancelColor ? { color: cancelColor } : undefined]}>{cancelText}</Text>
              </Touchable>
            )}
            <Touchable style={[styles.button, showCancel && styles.buttonBorder]} onPress={onConfirm}>
              <Text style={[styles.confirmText, confirmColor ? { color: confirmColor } : undefined]}>
                {confirmText}
              </Text>
            </Touchable>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
    justifyContent: 'center',
    alignItems: 'center',
    height: Theme.modalButtonHeight,
    lineHeight: Theme.modalButtonHeight,
  },
  buttonBorder: {
    borderLeftColor: Theme.borderColorBase,
    borderLeftWidth: Theme.borderWidthSm,
  },
  cancelText: {
    fontSize: Theme.modalButtonFontSize,
    color: Theme.colorTextSecondary,
  },
  confirmText: {
    fontSize: Theme.modalButtonFontSize,
    color: Theme.colorLink,
  },
});

export default ModalHost;
