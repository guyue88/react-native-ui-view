import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableHighlight, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Clipboard from '@react-native-community/clipboard';
import { Theme, Navbar, Icon, Toast } from 'react-native-ui-view';
import { PageContainer } from '../../core/router';
import { MODULES } from '../../core/constants';

const IconPage = () => {
  const navigation = useNavigation();

  const list = [
    'minus',
    'minus-circle',
    'minus-circle-fill',
    // 'minus-square',
    'plus',
    'plus-circle',
    'plus-circle-fill',
    // 'plus-square',
    'question',
    'question-circle',
    'question-circle-fill',
    'close',
    'close-circle',
    'close-circle-fill',

    'arrow-down',
    'arrow-left',
    'arrow-right',
    'arrow-up',
    'double-left',
    'double-right',

    'up',
    'left',
    'right',
    'down',

    'vertical-align-bottom',
    'vertical-align-middle',
    'vertical-align-top',
    'vertical-left',
    'vertical-right',

    'check',
    'close',
    'code',
    'colum-height',
    'download',
    'line',
    'search',
    'to-top',
    'upload',
    'wechat-fill',
    'zoom-out',

    'filter',
    'filter-fill',
  ];

  const copyIcon = (name: string) => {
    Clipboard.setString(`<Icon name="${name}" />`);
    Toast.info(`Icon ${name} 已复制`);
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <Navbar title="Icon 图标" showBack onBack={() => navigation.goBack()} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          {list.map((name, index) => {
            return (
              <TouchableHighlight
                key={index}
                activeOpacity={0.6}
                underlayColor={Theme.fillBody}
                onPress={() => copyIcon(name)}
                style={styles.gird}
              >
                <View style={styles.girdContent}>
                  <Icon name={name} size={24} />
                  <Text selectable style={styles.text}>
                    {name}
                  </Text>
                </View>
              </TouchableHighlight>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.fillBase,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: Theme.borderColor,
    borderTopWidth: 1,
    borderLeftColor: Theme.borderColor,
    borderLeftWidth: 1,
    margin: 15,
  },
  gird: {
    flexBasis: '33.3%',
    borderBottomColor: Theme.borderColor,
    borderBottomWidth: 1,
    borderRightColor: Theme.borderColor,
    borderRightWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 8,
  },
  girdContent: {
    alignItems: 'center',
  },
  text: {
    marginTop: 8,
  },
});

PageContainer(MODULES.ICON, IconPage);
