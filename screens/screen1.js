import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class screen1 extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> screen1 </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    padding:15,
    backgroundColor:"red",
  },
});
