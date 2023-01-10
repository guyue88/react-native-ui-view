import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, StatusBarStyle } from 'react-native';
import Popup from '../Popup';
import { Theme } from '../Styles/theme';
import Touchable from '../Touchable';
import PickerView from './pickerView';

export type PickerProps = {
  // 弹层可见
  visible: boolean;
  // 状态栏样式
  barStyle?: StatusBarStyle;
  // 数据源，字符串二维数组
  dataSource: string[][];
  // 选中的数据
  selectedIndex: number[];
  // 单项高度，默认40
  itemHeight?: number;

  // 是否显示顶部控制栏
  showToolbar?: boolean;
  // 控制栏标题
  title?: string;
  // 取消文案
  cancelText?: string;
  // 取消文案的颜色
  cancelColor?: string;
  // 确认文案
  confirmText?: string;
  // 确认文案的样式
  confirmColor?: string;

  // 点击蒙层可关闭整个弹层
  closeOnClickOverlay?: boolean;
  // 选中项变化回调
  onChange?: (selectedIndex: number[]) => void;
  // 弹层关闭回调
  onClose?: () => void;
  // 确定选中项，仅显示顶部控制栏时可用
  onConfirm?: (selectedIndex: number[]) => void;
};

const Picker: React.FC<PickerProps> = props => {
  const {
    visible = false,
    barStyle = 'dark-content',

    dataSource,
    selectedIndex,
    itemHeight = 40,

    showToolbar = true,
    title,
    cancelText = '取消',
    cancelColor,
    confirmText = '确定',
    confirmColor,

    closeOnClickOverlay = false,
    onClose,
    onChange,
    onConfirm,
  } = props;

  const [indexList, setIndexList] = useState([...selectedIndex]);

  useEffect(() => {
    setIndexList([...selectedIndex]);
  }, [selectedIndex]);

  return (
    <Popup visible={visible} barStyle={barStyle} closeOnClickOverlay={closeOnClickOverlay} onClose={onClose}>
      <View style={styles.container}>
        {showToolbar && (
          <View style={styles.toolbar}>
            <Touchable onPress={onClose}>
              <Text style={[styles.toolbarText, cancelColor ? { color: cancelColor } : {}]}>{cancelText}</Text>
            </Touchable>
            {!!title && <Text style={styles.toolbarText}>{title}</Text>}
            <Touchable
              onPress={() => {
                onConfirm && onConfirm(indexList);
                onClose && onClose();
              }}
            >
              <Text style={[styles.toolbarText, styles.confirmText, confirmColor ? { color: confirmColor } : {}]}>
                {confirmText}
              </Text>
            </Touchable>
          </View>
        )}
        <PickerView
          dataSource={dataSource}
          selectedIndex={indexList}
          itemHeight={itemHeight}
          onChange={data => {
            setIndexList(data);
            onChange && onChange(data);
          }}
        />
      </View>
    </Popup>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.hSpacingLg,
    paddingVertical: Theme.vSpacingMd,
  },
  toolbarText: {
    fontSize: Theme.fontSizeCaption,
    color: Theme.colorTextGray,
  },
  confirmText: {
    color: Theme.brandPrimaryTap,
  },
});

export default Picker;
