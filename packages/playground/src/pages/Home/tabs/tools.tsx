import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Tools = () => {
  return (
    <View>
      <Text style={styles.title}>Tools</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
  },
});

export default Tools;
