import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, StatusBar } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import Component1 from './components/Component1/Component1'

export default class MyApp extends Component{
  render() {
    return(
      <View style={styles.message}>
        {/* Component med props kaldet message */}
        <Component1 message="HE HEH EEEE" />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

AppRegistry.registerComponent('MyApp', () => MyApp)