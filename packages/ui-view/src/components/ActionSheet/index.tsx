import React, { PropsWithChildren } from 'react';
import { StyleSheet, Modal, View, Text, ImageSourcePropType, Image } from 'react-native';
import Touchable from '../Touchable';
import { Theme } from '../Styles/theme';
import Icon from '../Icon';

export type ActionSheetProps = {
  // 是否可见
  visible: boolean;
  // 选择项
  actions: {
    // 标题
    name: string;
    // 副标题
    subName?: string;
    // 标题颜色
    color?: string;
    // 标题size
    fontSize?: number;
    //  disabled 状态
    disabled?: boolean;
    // 显示图标，在标题前面
    icon?: ImageSourcePropType;
    // 图标大小
    iconSize?: number;
  }[];

  // 是否显示选择状态
  showCheckStatus?: boolean;
  // 选中的index项
  checkIndex?: number;
  // 选中图标的size
  checkSize?: number;
  // 选中状态下标题颜色
  checkColor?: string;
  // cancel按钮文字
  cancelText?: string;
  // 关闭回调
  onClose: () => void;
  // 可选状态下选择项目回调
  onClickItem: (index: number) => void;
};

const ActionSheet: React.FC<PropsWithChildren<ActionSheetProps>> = props => {
  const {
    visible,
    cancelText = '取消',
    actions,
    showCheckStatus = false,
    checkSize = 24,
    checkColor = Theme.colorTextParagraph,
    checkIndex,
    onClose,
    onClickItem,
  } = props;

  return (
    <Modal visible={visible} transparent animationType="slide" statusBarTranslucent onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.top} />
        <View style={styles.sheet}>
          {actions.map((item, index) => {
            const { name, icon, iconSize = 24, subName, color, fontSize, disabled } = item;

            const showIcon = !!icon;
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
                  <View style={[styles.main, showCheckStatus && styles.mainInLeft]}>
                    {showCheckStatus ? (
                      <>
                        <View style={styles.checkWrap}>
                          {!!showIcon && icon && (
                            <Image source={icon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
                          )}
                          <Text style={[styles.sheetText, disabled && styles.disabledText, style]}>{name}</Text>
                        </View>
                        {index === checkIndex && <Icon name="check" size={checkSize} color={checkColor} />}
                      </>
                    ) : (
                      <>
                        {!!showIcon && icon && (
                          <Image source={icon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
                        )}
                        <Text style={[styles.sheetText, disabled && styles.disabledText, style]}>{name}</Text>
                      </>
                    )}
                  </View>
                  {!!subName && (
                    <View style={[styles.sub, showCheckStatus && styles.mainInLeft]}>
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
    justifyContent: 'center',
    borderTopWidth: 0.5,
    paddingVertical: 15,
    backgroundColor: Theme.fillBase,
    borderTopColor: Theme.borderColor,
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
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  mainInLeft: {
    justifyContent: 'space-between',
  },
  checkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sub: {
    marginTop: 4,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  subInLeft: {
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 24,
  },
  subText: {
    fontSize: 12,
    color: Theme.colorTextSecondary,
  },
  cancel: {
    marginTop: 8,
    alignItems: 'center',
  },
});
export default ActionSheet;
