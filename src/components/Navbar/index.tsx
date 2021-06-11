import React from 'react';
import { StyleSheet, View, Text, StyleProp, ViewStyle, StatusBar } from 'react-native';
import Icon from '../Icon';

type Props = {
  title: string;
  titleSize?: number;
  titleBold?: boolean;
  titleColor?: string;
  height?: number;
  showBack?: boolean;
  backgroundColor?: string;
};

const Navbar: React.FC<Props> = props => {
  const {
    title,
    titleSize = 20,
    titleColor = '#333',
    titleBold = false,
    height = 44,
    showBack = false,
    backgroundColor,
  } = props;
  const statusBarHeight = StatusBar.currentHeight;

  const statusBarStyle: StyleProp<ViewStyle> = {};
  if (backgroundColor) {
    statusBarStyle.backgroundColor = backgroundColor;
  }

  return (
    <View style={statusBarStyle}>
      <View style={{ height: statusBarHeight }} />
      <View style={{ ...styles.container, height }}>
        <Icon name="direction-left" color="#666" size={25} />
        <Text
          style={{
            ...styles.title,
            color: titleColor,
            fontSize: titleSize,
            fontWeight: titleBold ? '600' : '400',
          }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    width: 0,
    textAlign: 'center',
  },
});

export default Navbar;
