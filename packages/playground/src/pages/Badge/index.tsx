import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, Badge, BadgeProps } from 'react-native-ui-view';
import Demo, { DemoProps } from '../../components/Demo';
import { PageContainer } from '../../core/router';
import { MODULES } from '../../core/constants';

const BadgePage = () => {
  const navigation = useNavigation();
  const [badgeProps, setBadgeProps] = useState<BadgeProps>({ text: '99', size: 'small', dot: false, corner: false });
  const [sizeIndex, setSizeIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);
  const [cornerIndex, setCornerIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const renderBadge = () => {
    return (
      <View style={styles.box}>
        <Text>Box</Text>
        <Badge {...badgeProps} />
      </View>
    );
  };

  const params: DemoProps['params'] = [
    {
      title: '大小',
      activeIndex: sizeIndex,
      list: [{ title: 'Small' }, { title: 'Large' }],
      async onChange(index: number) {
        setSizeIndex(index);
        setBadgeProps({
          ...badgeProps,
          size: index === 0 ? 'small' : 'large',
        });
      },
    },
    {
      title: '显示为点',
      activeIndex: dotIndex,
      list: [{ title: '否' }, { title: '是' }],
      async onChange(index: number) {
        setDotIndex(index);
        setBadgeProps({
          ...badgeProps,
          dot: index === 0 ? false : true,
        });
      },
    },
    {
      title: '显示在右上角',
      activeIndex: cornerIndex,
      list: [{ title: '否' }, { title: '是' }],
      async onChange(index: number) {
        setCornerIndex(index);
        setBadgeProps({
          ...badgeProps,
          corner: index === 0 ? false : true,
        });
      },
    },
    {
      title: '超出99',
      activeIndex: textIndex,
      list: [{ title: '否' }, { title: '是' }],
      async onChange(index: number) {
        setTextIndex(index);
        setBadgeProps({
          ...badgeProps,
          text: index === 0 ? '99' : '120',
        });
      },
    },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Badge 徽标" showBack onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Demo result={renderBadge()} params={params} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillBase,
  },
  page: {
    padding: 15,
  },
  box: {
    position: 'relative',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

PageContainer(MODULES.BADGE, BadgePage);
