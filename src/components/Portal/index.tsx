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
const PortalHost: React.FC = props => {
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
    <View style={styles.container}>
      {props.children}
      {portalList.map((item, index) => {
        return <View key={item.key}>{item.elem}</View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const portal = new PortalGuard();

export default class Portal extends React.Component {
  static add = portal.add;
  static remove = portal.remove;

  render() {
    return <PortalHost>{this.props.children}</PortalHost>;
  }
}
