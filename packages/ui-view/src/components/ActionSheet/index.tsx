import React, { PropsWithChildren } from 'react';
import { StyleSheet, Modal, View, Text } from 'react-native';
import Touchable from '../Touchable';
import { Theme } from '../Styles/theme';

export type ActionSheetProps = {
  visible: boolean;
  actions: {
    name: string;
    subName?: string;
    color?: string;
    fontSize?: number;
    disabled?: boolean;
  }[];
  cancelText?: string;
  onClose: () => void;
  onClickItem: (index: number) => void;
};

const ActionSheet: React.FC<PropsWithChildren<ActionSheetProps>> = props => {
  const { visible, cancelText = '取消', actions, onClose, onClickItem } = props;

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.sheet}>
          {actions.map((item, index) => {
            const { name, subName, color, fontSize, disabled } = item;
            const style: Record<string, string | number> = {};
            color && (style.color = color);
            fontSize && (style.fontSize = fontSize);

            return (
              <Touchable
                key={index}
                underlayColor={Theme.fillBody}
                onPress={() => onClickItem(index)}
                disabled={disabled}
                style={[styles.sheetItem, index === 0 && styles.noBorder]}
              >
                <>
                  <View>
                    <Text style={[styles.sheetText, style, disabled && styles.disabledText]}>{name}</Text>
                  </View>
                  {!!subName && (
                    <View style={styles.sub}>
                      <Text style={styles.subText}>{subName}</Text>
                    </View>
                  )}
                </>
              </Touchable>
            );
          })}
          <Touchable
            underlayColor={Theme.fillBody}
            onPress={onClose}
            style={[styles.sheetItem, styles.noBorder, styles.cancel]}
          >
            <Text style={styles.sheetText}>{cancelText}</Text>
          </Touchable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillMask,
  },
  top: {
    flex: 1,
  },
  sheet: {
    backgroundColor: Theme.fillBody,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  sheetItem: {
    backgroundColor: Theme.fillBase,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: Theme.borderColor,
    borderTopWidth: 0.5,
  },
  noBorder: {
    borderTopWidth: 0,
  },
  sheetText: {
    fontSize: 15,
    color: Theme.colorTextBase,
  },
  disabledText: {
    color: Theme.colorTextDisabled,
  },
  sub: {
    marginTop: 4,
  },
  subText: {
    fontSize: 12,
    color: Theme.colorTextSecondary,
  },
  cancel: {
    marginTop: 8,
  },
});
export default ActionSheet;
