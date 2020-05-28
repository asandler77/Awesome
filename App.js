/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
import Header from './components/header';

export default function App() {
  const [item, setItem] = useState([
    {text: 'lehem', key: '1'},
    {text: 'milk', key: '2'},
    {text: 'ice cream', key: '3'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'coral',
  },
  body: {
    backgroundColor: '#CCFFE5',
    height: '100%',
    margin: 0,
  },
});
