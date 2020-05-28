/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {useState} from 'react';
import Header from './components/header';

export default function App() {
  const [purItem, setPurItem] = useState([
    {text: 'Lehem', key: '1'},
    {text: 'Milk', key: '2'},
    {text: 'Ice cream', key: '3'},
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <FlatList
          data={purItem}
          renderItem={({item}) => <Text>{item.text}</Text>}
          // keyExtractor={myItem => myItem.id}
        />
      </View>
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
