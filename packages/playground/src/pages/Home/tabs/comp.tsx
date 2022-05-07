import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Icon, Navbar } from 'react-native-ui-view';
import { MODULES } from '../../../core/constants';

const Comp = () => {
  const navigation = useNavigation();
  const list = [
    {
      title: 'Badge 徽标',
      onPress: () => navigation.navigate({ name: MODULES.BADGE }),
    },
    {
      title: 'Button 按钮',
      onPress: () => navigation.navigate({ name: MODULES.BUTTON }),
    },
    {
      title: 'Icon 图标',
      onPress: () => navigation.navigate({ name: MODULES.ICON }),
    },
    {
      title: 'IndexList 索引列表',
      onPress: () => navigation.navigate({ name: MODULES.INDEX_LIST }),
    },
    {
      title: 'Modal 对话框',
      onPress: () => navigation.navigate({ name: MODULES.MODAL }),
    },
    {
      title: 'Navbar 导航栏',
      onPress: () => {},
    },
    {
      title: 'Search 搜索',
      onPress: () => navigation.navigate({ name: MODULES.SEARCH }),
    },
    {
      title: 'TabBar 底部导航',
      onPress: () => {},
    },
    {
      title: 'Toast 轻提示',
      onPress: () => navigation.navigate({ name: MODULES.TOAST }),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="组件" />
      <Text style={styles.title}>ReactNative UI View</Text>
      <Text style={styles.subTitle}>优秀的ReactNative UI开发框架</Text>
      <View style={styles.main}>
        {list.map((item, index) => {
          return (
            <TouchableHighlight key={index} activeOpacity={0.6} underlayColor={Theme.fillBody} onPress={item.onPress}>
              <View style={styles.listItem}>
                <Text style={styles.listTitle}>{item.title}</Text>
                <Icon name="right" size={22} />
              </View>
            </TouchableHighlight>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.fillBase,
    flex: 1,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
  subTitle: {
    color: Theme.colorTextSecondary,
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
  },
  main: {
    marginTop: 60,
    paddingHorizontal: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: 0.5,
  },
  listTitle: {
    fontSize: 16,
    color: Theme.colorTextBase,
  },
});

export default Comp;
