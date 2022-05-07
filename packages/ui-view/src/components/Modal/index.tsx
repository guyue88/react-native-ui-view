import React, { Component } from 'react';
import ModalHost, { ModalProps } from './modal';
import { portal } from '../Portal';

export default class Modal extends Component<ModalProps> {
  /**
   *
   * @param title {string} 标题
   * @param content {string} 内容
   * @param options Omit<ModalProps, 'title' | 'content' | 'visible'> 配置项，参考Modal组件配置
   * @returns
   */
  static show(title: string, content: string, options: Omit<ModalProps, 'title' | 'content' | 'visible'> = {}) {
    const key = portal.add(
      <ModalHost
        {...options}
        title={title}
        content={content}
        visible={true}
        onConfirm={() => {
          options.onConfirm && options.onConfirm();
        }}
        onClose={() => {
          options.onClose && options.onClose();
          portal.remove(key);
        }}
      />,
    );
    return key;
  }

  /**
   *
   * @param key {number} Modal.show的返回值
   */
  static hide(key: number) {
    portal.remove(key);
  }

  render() {
    return <ModalHost {...this.props} />;
  }
}
