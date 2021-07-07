import React, { Component } from 'react';
import ModalHost, { ModalProps } from './modal';
import { portal } from '../Portal';

export default class Modal extends Component<ModalProps> {
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

  static hide(key: number) {
    portal.remove(key);
  }

  render() {
    return <ModalHost {...this.props} />;
  }
}
