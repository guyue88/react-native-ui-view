import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  StatusBar,
  StatusBarStyle,
  TextStyle,
  TouchableHighlight,
  LayoutChangeEvent,
} from 'react-native';

import Icon from '../Icon';
import { Theme, FontWeight } from '../Styles/theme';

export type NavbarProps = {
  // 标题
  title: string;
  // 标题文字大小
  titleSize?: number;
  // 标题是否加粗
  titleBold?: boolean;
  // 标题文字颜色
  titleColor?: string;
  // 导航栏高度，默认44
  height?: number;
  // 是否显示返回按钮
  showBack?: boolean;
  // 返回按钮Icon的大小
  backIconSize?: number;
  // 返回按钮Icon的颜色
  backIconColor?: string;
  // 返回按钮Icon的名字
  backIconName?: string;
  // 返回按钮的文字，默认“返回”
  backText?: string;
  // 返回按钮文字的样式
  backTextStyle?: TextStyle;
  // 背景颜色
  backgroundColor?: string;
  // StatusBar 的 barStyle
  barStyle?: StatusBarStyle;
  // 是否展示底部Border
  showBorderBottom?: boolean;
  // 自定义左侧内容
  renderLeft?: () => React.ReactNode;
  // 自定义右侧内容
  renderRight?: () => React.ReactNode;
  // 返回按钮被点击的回调
  onBack?: () => void;
};

const Navbar: React.FC<NavbarProps> = props => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const {
    height = 42,
    title,
    titleSize = 17,
    titleColor = Theme.colorTextParagraph,
    titleBold = false,
    showBack = false,
    backIconSize = 22,
    backIconColor = Theme.colorTextParagraph,
    backIconName = 'left',
    backText = '',
    backTextStyle = {},
    backgroundColor,
    barStyle = 'dark-content',
    showBorderBottom = true,
    renderLeft,
    renderRight,
    onBack,
  } = props;

  const onLeftLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setLeft(width);
  };

  const onRightLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setRight(width);
  };

  const statusBarHeight = StatusBar.currentHeight;
  const offset = Math.max(left, right) + 20;

  const statusBarStyle: StyleProp<ViewStyle> = {};
  if (backgroundColor) {
    statusBarStyle.backgroundColor = backgroundColor;
  }
  if (showBorderBottom) {
    statusBarStyle.borderBottomColor = Theme.borderColor;
    statusBarStyle.borderBottomWidth = 0.5;
  }

  return (
    <View style={statusBarStyle}>
      <StatusBar translucent barStyle={barStyle} backgroundColor="transparent" />
      {/* 占位 */}
      <View style={{ height: statusBarHeight }} />
      <View style={{ ...styles.container, height }}>
        {renderLeft ? (
          <View onLayout={onLeftLayout}>{renderLeft()}</View>
        ) : (
          showBack && (
            <TouchableHighlight
              style={styles.backIconWrap}
              activeOpacity={0.6}
              underlayColor={Theme.fillBody}
              onPress={() => onBack && onBack()}
              onLayout={onLeftLayout}
            >
              <>
                <Icon name={backIconName} color={backIconColor} size={backIconSize} />
                {!!backText && <Text style={{ ...styles.backText, ...backTextStyle }}>{backText}</Text>}
              </>
            </TouchableHighlight>
          )
        )}
        <Text
          style={{
            ...styles.title,
            left: offset,
            right: offset,
            color: titleColor,
            fontSize: titleSize,
            fontWeight: titleBold ? FontWeight.BOLD : FontWeight.NORMAL,
          }}
          numberOfLines={1}
        >
          {title}
        </Text>

        {renderRight && <View onLayout={onRightLayout}>{renderRight()}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    paddingRight: 12,
  },
  backIconWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderRadius: 40,
  },
  backText: {
    fontSize: 16,
    marginLeft: 2,
    color: Theme.colorTextBase,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    position: 'absolute',
  },
});

export default Navbar;
