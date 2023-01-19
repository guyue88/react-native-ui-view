import React, { isValidElement, ReactNode } from 'react';
import { View, StyleSheet, Text, StyleProp, ViewStyle, TextStyle, Dimensions } from 'react-native';
import { IconName } from '../../assets/svg';
import { Theme } from '../../components/Styles/theme';
import Icon from '../Icon';
import Touchable from '../Touchable';

export type CellProps = {
  // 样式
  style?: StyleProp<ViewStyle>;
  // 标题
  title: string;
  // 标题样式
  titleStyle?: StyleProp<TextStyle>;
  // 副标题
  label?: string;
  // 是否显示顶部边线
  border?: boolean;
  // 右侧内容是否与左侧内容垂直居中显示，默认true，否则顶部对齐
  centerRightText?: boolean;
  // 右侧文案
  rightContent?: string | ReactNode;
  // 是否显示为链接形式，链接形式会在右侧显示一个箭头
  isLink?: boolean;
  // 右侧图标名称，默认右箭头
  rightIconName?: IconName;
  // 右侧图标大小，默认24
  rightIconSize?: number;
  // 右侧图标颜色，默认#7f7f7f
  rightIconColor?: string;
  // 渲染标题左侧图标
  renderLeftIcon?: () => ReactNode;
  // 点击回调
  onPress?: () => void;
};

const Cell: React.FC<CellProps> = props => {
  const {
    title,
    titleStyle = {},
    label,
    border = true,

    centerRightText = false,

    rightContent,
    isLink = false,
    rightIconName = 'right',
    rightIconSize = 24,
    rightIconColor = '#7f7f7f',

    style,
    onPress,
    renderLeftIcon,
  } = props;

  return (
    <Touchable
      style={[styles.container, border && styles.border, style]}
      underlayColor={Theme.fillBody}
      onPress={onPress}
    >
      <>
        <View style={styles.left}>
          <View style={styles.titleWrap}>
            {renderLeftIcon ? <View style={styles.iconWrap}>{renderLeftIcon()}</View> : null}

            <Text style={[styles.titleText, titleStyle]}>{title}</Text>
          </View>
          {!!label && (
            <View style={styles.titleLabelWrap}>
              <Text numberOfLines={1} style={styles.titleLabel}>
                {label}
              </Text>
            </View>
          )}
        </View>
        <View style={[styles.right, { alignSelf: centerRightText ? 'center' : 'flex-start' }]}>
          {!!rightContent &&
            (isValidElement(rightContent) ? (
              rightContent
            ) : (
              <View style={styles.rightContent}>
                <Text style={styles.rightContentText} numberOfLines={1} ellipsizeMode="tail">
                  {rightContent}
                </Text>
              </View>
            ))}
          {isLink && <Icon name={rightIconName} size={rightIconSize} color={rightIconColor} />}
        </View>
      </>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  border: {
    borderBottomColor: Theme.borderLightColor,
    borderBottomWidth: 0.5,
  },
  left: {
    flexBasis: '50%',
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    marginRight: 6,
  },
  titleText: {
    fontSize: 16,
    color: Theme.colorTextParagraph,
  },
  titleLabelWrap: {
    marginTop: 4,
  },
  titleLabel: {
    fontSize: 12,
    color: Theme.colorTextCaption,
  },
  right: {
    flexBasis: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rightContentText: {
    fontSize: 14,
    color: Theme.colorTextGray,
  },
});

export default Cell;
