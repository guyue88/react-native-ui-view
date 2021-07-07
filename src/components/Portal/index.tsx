import React, { useEffect, useState } from 'react';
import { NativeEventEmitter, View, StyleSheet } from 'react-native';

const addEventKey = 'REACT_NATIVE_UI_VIEW_ADD_PORTAL';
const removeEventKey = 'REACT_NATIVE_UI_VIEW_REMOVE_PORTAL';
const EventEmitter = new NativeEventEmitter();

class PortalGuard {
  private key = 100;

  add(elem: React.ReactNode) {
    const key = this.key++;
    EventEmitter.emit(addEventKey, { elem, key });
    return key;
  }

  remove(key: number) {
    EventEmitter.emit(removeEventKey, key);
  }
}

type PortalItem = { elem: React.ReactNode; key: number };
const PortalHost: React.FC = () => {
  const [portalList, setPortalList] = useState<PortalItem[]>([]);

  useEffect(() => {
    const listenerAdd = EventEmitter.addListener(addEventKey, mount);
    const listenerRemove = EventEmitter.addListener(removeEventKey, unmount);

    return () => {
      EventEmitter.removeSubscription(listenerAdd);
      EventEmitter.removeSubscription(listenerRemove);
    };
  }, []);

  const mount = (portalItem: PortalItem) => {
    setPortalList([...portalList, portalItem]);
  };
  const unmount = (key: number) => {
    setPortalList([...portalList].filter(item => item.key !== key));
  };

  return (
    <>
      {portalList.map(item => (
        <View style={styles.portal} key={item.key}>
          {item.elem}
        </View>
      ))}
    </>
  );
};

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

const styles = StyleSheet.create({
  portal: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
