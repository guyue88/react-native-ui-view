import React, { PropsWithChildren } from 'react';
import { View, StyleSheet, Text, ViewProps } from 'react-native';
import { Theme } from '../../components/Styles/theme';

export type CellGroupProps = ViewProps & {
  // 标题
  title?: string;
  // 背景色
  backgroundColor?: string;
};

const CellGroup: React.FC<PropsWithChildren<CellGroupProps>> = props => {
  const { title, backgroundColor = Theme.fillBody, style, children, ...rest } = props;
  return (
    <View>
      {!!title && (
        <View style={[styles.title, { backgroundColor }, style]} {...rest}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 15,
    justifyContent: 'center',
    height: 40,
  },
  titleText: {
    fontSize: 16,
    color: Theme.colorTextGray,
  },
});

export default CellGroup;
