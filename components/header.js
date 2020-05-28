import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFFFCC',
    height: 80,
  },
  title: {
    color: 'blue',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
