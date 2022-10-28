import React, { useEffect, useState } from 'react';
import { DeviceEventEmitter, View, StyleSheet } from 'react-native';

type PortalItem = { elem: React.ReactNode; key: number };
type Props = {};

const addEventKey = 'REACT_NATIVE_UI_VIEW_ADD_PORTAL';
const removeEventKey = 'REACT_NATIVE_UI_VIEW_REMOVE_PORTAL';

const eventEmitter = DeviceEventEmitter;

export class PortalGuard {
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

export const PortalHost: React.FC<Props> = () => {
  const [portalList, setPortalList] = useState<PortalItem[]>([]);

  const mount = (portalItem: PortalItem) => {
    setPortalList([...portalList, portalItem]);
  };
  const unmount = (key: number) => {
    setPortalList([...portalList].filter(item => item.key !== key));
  };

  useEffect(() => {
    const listenerAdd = eventEmitter.addListener(addEventKey, mount);
    const listenerRemove = eventEmitter.addListener(removeEventKey, unmount);

    return () => {
      listenerAdd.remove();
      listenerRemove.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

const styles = StyleSheet.create({
  portal: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
});
