import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';
import { Theme } from '../Styles/theme';
import { portal } from '../Portal';
import { sleep } from '../../utils';
import Icon from '../Icon';

type ToastType = 'loading' | 'success' | 'fail' | 'info';
export type ToastProps = {
  // 内容
  content: string;
  // 类型
  type: ToastType;
  // 是否显示蒙层
  mask?: boolean;
};

const ToastHost: React.FC<ToastProps> = props => {
  const { content, type, mask } = props;

  let icon = null;
  if (type === 'loading') {
    icon = <ActivityIndicator animating size="large" color="#fff" style={styles.icon} />;
  } else if (type === 'success') {
    icon = <Icon name="check" size={32} color="#fff" />;
  } else if (type === 'fail') {
    icon = <Icon name="close-circle" size={32} color="#fff" />;
  }

  return (
    <View style={styles.container} pointerEvents={mask ? undefined : 'box-none'}>
      <View style={[styles.main, icon !== null ? styles.iconToast : styles.textToast]}>
        {icon}
        <Text style={styles.text}>{content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: Theme.toastZIndex,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  main: {
    backgroundColor: Theme.toastFill,
    minWidth: 100,
    alignItems: 'center',
  },
  iconToast: {
    borderRadius: Theme.radiusLg,
    padding: Theme.vSpacingLg,
  },
  textToast: {
    borderRadius: Theme.radiusSm,
    paddingVertical: Theme.vSpacingMd,
    paddingHorizontal: Theme.vSpacingLg,
  },
  icon: {
    marginBottom: Theme.vSpacingXs,
  },
  text: {
    color: Theme.colorTextBaseInverse,
    fontSize: Theme.fontSizeCaption,
  },
});

export default class Toast {
  private static async show(type: ToastType, content: string, duration = 3000, mask = true) {
    const key = portal.add(<ToastHost type={type} content={content} mask={mask} />);
    if (duration > 0) {
      await sleep(duration);
      portal.remove(key);
    }
    return key;
  }

  /**
   *
   * @param content {string} 内容
   * @param mask {boolean} 是否显示蒙层
   * @returns
   */
  public static loading(content: string, mask = true) {
    return this.show('loading', content, 0, mask);
  }
  /**
   *
   * @param key {number} Toast.loading的返回值
   */
  public static hideLoading(key: number) {
    portal.remove(key);
  }
  /**
   *
   * @param content {string} 内容
   * @param duration {number} 展示时间，默认3000ms
   * @param mask {boolean} 是否显示蒙层
   */
  public static success(content: string, duration = 3000, mask = false) {
    this.show('success', content, duration, mask);
  }
  /**
   *
   * @param content {string} 内容
   * @param duration {number} 展示时间，默认3000ms
   * @param mask {boolean} 是否显示蒙层
   */
  public static fail(content: string, duration = 3000, mask = false) {
    this.show('fail', content, duration, mask);
  }
  /**
   *
   * @param content {string} 内容
   * @param duration {number} 展示时间，默认3000ms
   * @param mask {boolean} 是否显示蒙层
   */
  public static info(content: string, duration = 3000, mask = false) {
    this.show('info', content, duration, mask);
  }
}
