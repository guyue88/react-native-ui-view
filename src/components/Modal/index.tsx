import React, { Component } from 'react';
import ModalHost, { Props } from './modal';
import { portal } from '../Portal';

export default class Modal extends Component<Props> {
  static show(title: string, content: string, options: Omit<Props, 'title' | 'content' | 'visible'>) {
    const key = portal.add(
      <ModalHost
        {...options}
        title={title}
        content={content}
        visible={true}
        onConfirm={() => {
          options.onConfirm && options.onConfirm();
          portal.remove(key);
        }}
        onClose={() => {
          options.onClose && options.onConfirm();
          portal.remove(key);
        }}
      />,
    );
  }

  render() {
    return <ModalHost {...this.props} />;
  }
}
