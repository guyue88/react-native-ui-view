import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, Modal } from 'react-native-ui-view';
import Demo, { DemoProps } from '../../components/Demo';
import { PageContainer } from '../../core/router';
import { MODULES } from '../../core/constants';

const ModalPage = () => {
  const navigation = useNavigation();
  const [statusIndex, setStatusIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const showModal = (title: string, content: string) => {
    Modal.show(title, content, {
      onClose() {
        setStatusIndex(0);
      },
    });
  };

  const params: DemoProps['params'] = [
    {
      title: '状态',
      activeIndex: statusIndex,
      list: [{ title: '关闭' }, { title: '显示' }],
      onChange(index: number) {
        setStatusIndex(index);
        if (index === 1) {
          showModal(titleIndex === 0 ? '对话框' : '', '对话框内容对话框内容');
        }
      },
    },
    {
      title: '是否显示标题',
      activeIndex: titleIndex,
      list: [{ title: '是' }, { title: '否' }],
      onChange(index: number) {
        setTitleIndex(index);
        setStatusIndex(1);
        showModal(index === 0 ? '对话框' : '', '对话框内容对话框内容');
      },
    },
  ];

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Modal 对话框" showBack onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Demo result="请点击弹窗查看效果" params={params} />
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

PageContainer(MODULES.MODAL, ModalPage);
