import React from 'react';
import { PortalGuard, PortalHost } from './host';

export const portal = new PortalGuard();

export default class Portal extends React.Component {
  static add = portal.add;
  static remove = portal.remove;

  render() {
    return (
      <>
        {this.props.children}
        <PortalHost />
      </>
    );
  }
}
