import React, { isValidElement } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Switcher, { SwitcherProps } from '../Switcher';

export type DemoProps = {
  result: React.ReactNode;
  params: ({
    title: string;
  } & SwitcherProps)[];
};

const Demo: React.FC<DemoProps> = props => {
  const { result, params } = props;

  return (
    <>
      <View style={styles.result}>
        <View>
          <Text style={styles.resultTitleText}>演示效果</Text>
        </View>
        <View style={styles.resultContent}>
          {isValidElement(result) ? result : <Text style={styles.resultContentTips}>{result}</Text>}
        </View>
      </View>
      <View style={styles.params}>
        <View style={styles.paramsTitle}>
          <Text style={styles.paramsTitleText}>参数配置</Text>
        </View>

        {params.map((item, index) => {
          return (
            <View style={styles.listItem} key={index}>
              <View style={styles.itemTitle}>
                <Text style={styles.before} />
                <Text style={styles.itemTitleText}>{item.title}</Text>
              </View>
              <View style={styles.switcherWrap}>
                <Switcher activeIndex={item.activeIndex} list={item.list} onChange={item.onChange} />
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  result: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    padding: 15,
    borderRadius: 2,
  },
  resultTitleText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
    alignSelf: 'center',
  },
  resultContent: {
    marginTop: 15,
    width: '100%',
  },
  resultContentTips: {
    color: '#999',
    fontSize: 14,
    alignSelf: 'center',
  },
  params: {},
  paramsTitle: {
    marginTop: 30,
    paddingBottom: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  paramsTitleText: {
    color: '#000',
    fontWeight: '500',
    fontSize: 18,
    alignSelf: 'center',
  },
  listItem: {
    marginTop: 15,
  },
  itemTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  before: {
    width: 4,
    height: 16,
    borderRadius: 10,
    backgroundColor: '#606266',
  },
  itemTitleText: {
    fontSize: 15,
    color: '#333',
    marginLeft: 6,
  },
  switcherWrap: {
    marginTop: 8,
  },
  switcher: {
    borderRadius: 4,
    backgroundColor: '#eeeeef',
    padding: 4,
  },
  switcherInner: {
    position: 'relative',
    zIndex: 1,
    flexDirection: 'row',
  },
  switcherItem: {
    position: 'relative',
    zIndex: 3,
    flex: 1,
    textAlign: 'center',
    paddingVertical: 4,
  },
  activeBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: '#fff',
    width: '50%',
    height: '100%',
    borderRadius: 4,
  },
});

export default Demo;
