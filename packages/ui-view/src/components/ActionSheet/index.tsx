import React, { PropsWithChildren, ReactNode, isValidElement } from 'react';
import { StyleSheet, View, Text, ImageSourcePropType, Image, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Touchable from '../Touchable';
import { Theme } from '../Styles/theme';
import Icon from '../Icon';
import Popup from '../Popup';

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
    //  是否是 disabled 状态
    disabled?: boolean;
    // 显示图标，在标题前面
    icon?: ImageSourcePropType | ReactNode;
    // 图标大小
    iconSize?: number;
  }[];
  // 图标是否显示为圆形的
  iconCircular?: boolean;
  // 对齐方式，默认居中对齐
  align?: 'left' | 'center' | 'right';
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
    align = 'center',
    showCheckStatus = false,
    checkSize = 24,
    checkColor = '#7f7f7f',
    checkIndex,
    iconCircular = false,
    onClose,
    onClickItem,
  } = props;

  const mainStyle: StyleProp<ViewStyle>[] = [];

  if (showCheckStatus) {
    mainStyle.push(styles.mainBetween);
  } else if (align === 'left') {
    mainStyle.push(styles.mainInLeft);
  } else if (align === 'right') {
    mainStyle.push(styles.mainInRight);
  }

  return (
    <Popup visible={visible} barStyle="light-content" closeOnClickOverlay={true} onClose={onClose}>
      <View style={styles.container}>
        {actions.map((item, index) => {
          const { name, icon, iconSize = 24, subName, color, fontSize, disabled } = item;

          const showIcon = !!icon;
          const style: StyleProp<TextStyle> = {};
          color && (style.color = color);
          fontSize && (style.fontSize = fontSize);

          const iconAndText = (
            <>
              {!!showIcon &&
                (isValidElement(icon) ? (
                  icon
                ) : (
                  <Image
                    source={icon as ImageSourcePropType}
                    style={[
                      styles.icon,
                      { width: iconSize, height: iconSize },
                      iconCircular && { borderRadius: iconSize / 2 },
                    ]}
                    resizeMethod="scale"
                    resizeMode="contain"
                  />
                ))}
              <Text style={[styles.sheetText, disabled && styles.disabledText, style]}>{name}</Text>
            </>
          );

          return (
            <Touchable
              key={index}
              underlayColor={Theme.fillBody}
              onPress={() => onClickItem(index)}
              disabled={disabled}
              style={[styles.sheetItem, index === 0 && styles.noBorder]}
            >
              <>
                <View style={[styles.main, ...mainStyle]}>
                  {showCheckStatus ? (
                    <>
                      <View style={styles.checkWrap}>{iconAndText}</View>
                      {index === checkIndex && <Icon name="select" size={checkSize} color={checkColor} />}
                    </>
                  ) : (
                    iconAndText
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
    </Popup>
  );
};

const styles = StyleSheet.create({
  container: {
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
    justifyContent: 'flex-start',
  },
  mainInRight: {
    justifyContent: 'flex-end',
  },
  mainBetween: {
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
    marginRight: 18,
    // borderRadius: 12,
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
