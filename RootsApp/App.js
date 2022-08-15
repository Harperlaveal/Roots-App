import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import MainContainer from './navigation/maincontainer';

export default class App extends React.Component {
  constructor () {
    super();

    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Do something', done: false},
        {id: 1, title: 'Something Else', done: false}
      ]
    }
  }

  render() {

    const statusbar = (Platform.os == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;

  return (
    <View style={styles.container}>
      <View style={styles.statusbar}></View>
      <MainContainer/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    height: 20,
  }
});
