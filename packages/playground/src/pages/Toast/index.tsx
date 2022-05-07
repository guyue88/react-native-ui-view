import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, Toast } from 'react-native-ui-view';
import Demo, { DemoProps } from '../../components/Demo';
import { MODULES } from '../../core/constants';
import { PageContainer } from '../../core/router';

const ToastPage = () => {
  const navigation = useNavigation();
  const [typeIndex, setTypeIndex] = useState(0);

  const params: DemoProps['params'] = [
    {
      title: '分类',
      activeIndex: typeIndex,
      list: [{ title: '关闭' }, { title: 'Loading' }, { title: 'Info' }, { title: 'Success' }, { title: 'Fail' }],
      async onChange(index: number) {
        setTypeIndex(index);
        if (index === 1) {
          const key = await Toast.loading('Loading');
          setTimeout(() => {
            Toast.hideLoading(key);
          }, 3000);
        } else if (index === 2) {
          Toast.info('Info');
        } else if (index === 3) {
          Toast.success('Success');
        } else if (index === 4) {
          Toast.fail('Fail');
        }
      },
    },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Toast 轻提示" showBack onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Demo result="请点击Toast查看效果" params={params} />
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
});

PageContainer(MODULES.TOAST, ToastPage);
