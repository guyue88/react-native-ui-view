import React, { useEffect, useRef, useState } from 'react';
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
  // 用一个ref记录，防止同一时间触发新增删除导致的错乱问题
  const $portalList = useRef<PortalItem[]>([]);
  const [portalList, setPortalList] = useState<PortalItem[]>([]);

  const mount = (portalItem: PortalItem) => {
    $portalList.current = [...$portalList.current, portalItem];
    setPortalList($portalList.current);
  };
  const unmount = (key: number) => {
    $portalList.current = $portalList.current.filter(item => item.key !== key);
    setPortalList($portalList.current);
  };

  useEffect(() => {
    const listenerAdd = eventEmitter.addListener(addEventKey, mount);
    const listenerRemove = eventEmitter.addListener(removeEventKey, unmount);

    return () => {
      listenerAdd.remove();
      listenerRemove.remove();
    };
  }, []);

  return (
    <>
      {portalList.map(item => (
        <View style={[styles.portal, { zIndex: item.key }]} key={item.key} pointerEvents="box-none">
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
