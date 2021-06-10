import React from 'react';
import { StyleSheet, View, Text, Image, ImageSourcePropType, Pressable } from 'react-native';

type TabItem = {
  icon: ImageSourcePropType;
  selectedIcon: ImageSourcePropType;
  text: string;
};

type Props = {
  list: TabItem[];
  show?: boolean;
  height?: number;
  iconSize?: number;
  activeIndex?: number;
  activeColor?: string;
  inactiveColor?: string;
  backgroundColor?: string;
  showBorderTop?: boolean;
  onChange?: (index: number, tabItem: TabItem) => void;
};

const TabBar: React.FC<Props> = props => {
  const {
    list,
    show = true,
    height = 50,
    iconSize = 20,
    activeIndex = 0,
    activeColor = '#5098FF',
    inactiveColor = '#606266',
    showBorderTop = true,
    backgroundColor = '#FFFFFF',
    onChange = () => 1,
  } = props;

  if (!show) return null;

  return (
    <View style={[styles.container, { backgroundColor, height }, showBorderTop ? styles.borderTop : {}]}>
      {list.map((item, index) => {
        const active = activeIndex === index;
        const currentIcon = active ? item.selectedIcon : item.icon;
        const currentColor = active ? activeColor : inactiveColor;

        return (
          <Pressable key={index} style={styles.tabItem} onPress={() => onChange(index, item)}>
            <Image source={currentIcon} style={[styles.icon, { width: iconSize, height: iconSize }]} />
            <Text style={[styles.text, { color: currentColor }]}>{item.text}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  borderTop: {
    borderTopColor: '#E4E7ED',
    borderTopWidth: 1,
  },

  tabItem: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  text: {
    fontSize: 13,
    marginTop: 4,
  },
});

export default TabBar;
