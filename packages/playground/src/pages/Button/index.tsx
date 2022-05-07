import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme, Navbar, Button } from 'react-native-ui-view';
import { MODULES } from '../../core/constants';
import { PageContainer } from '../../core/router';

const ButtonPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Button 按钮" showBack onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Button text="按钮" type="primary" />
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

PageContainer(MODULES.BUTTON, ButtonPage);
