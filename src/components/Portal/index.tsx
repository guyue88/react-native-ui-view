import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, View, StyleSheet } from 'react-native';

const addEventKey = 'REACT_NATIVE_UI_VIEW_ADD_PORTAL';
const removeEventKey = 'REACT_NATIVE_UI_VIEW_REMOVE_PORTAL';

const eventEmitter = DeviceEventEmitter;

class PortalGuard {
  private key = 100;

  add(elem: React.ReactNode) {
    const key = this.key++;
    eventEmitter.emit(addEventKey, { elem, key });
    return key;
  }

  remove(key: number) {
    eventEmitter.emit(removeEventKey, key);
  }
}

type PortalItem = { elem: React.ReactNode; key: number };
const PortalHost: React.FC = () => {
  const [portalList, setPortalList] = useState<PortalItem[]>([]);

  useEffect(() => {
    const listenerAdd = eventEmitter.addListener(addEventKey, mount);
    const listenerRemove = eventEmitter.addListener(removeEventKey, unmount);

    return () => {
      listenerAdd.remove();
      listenerRemove.remove();
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
        <View style={styles.portal} key={item.key} pointerEvents="box-none">
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
