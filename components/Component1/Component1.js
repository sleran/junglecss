import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Component1 extends Component{
    // State man kan sende til text f.eks.
    constructor(){
        super();
        this.state = {
            name: 'Brad'
        }
    }

  render() {
    return(
      <View style={{flex: 1, backgroundColor: 'powderblue'}}>
        {/* Props man kan sende videre med componentet */}
        <Text>{this.props.message}</Text>
        <Text>{this.state.name}</Text>
      </View>

    );
  }
}

AppRegistry.registerComponent('Component1', () => Component1)