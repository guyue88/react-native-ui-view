import React, { Component, ReactNode } from 'react';
import ModalHost, { ModalProps } from './modal';
import { portal } from '../Portal';

export default class Modal extends Component<ModalProps> {
  /**
   *
   * @param title {string} 标题
   * @param content {string} 内容
   * @param options Omit<ModalProps, 'title' | 'content' | 'visible' | 'onConfirm' | 'onClose'> 配置项，参考Modal组件配置
   * @returns
   */
  static show(
    title: string,
    content: string | ReactNode,
    options: Omit<ModalProps, 'title' | 'content' | 'visible' | 'onConfirm' | 'onClose'> = {},
  ): Promise<{ confirm: boolean }> {
    return new Promise(resolve => {
      const key = portal.add(
        <ModalHost
          {...options}
          title={title}
          content={content}
          visible={true}
          onConfirm={() => {
            portal.remove(key);
            resolve({ confirm: true });
          }}
          onClose={() => {
            portal.remove(key);
            resolve({ confirm: false });
          }}
        />,
      );
    });
  }

  render() {
    return <ModalHost {...this.props} />;
  }
}
