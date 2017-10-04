/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import nodejs from 'nodejs-mobile-react-native';

export default class NodeReactNative extends Component {
  componentWillMount() {
    nodejs.start();
    nodejs.channel.addListener(
      "message",
      (msg) => {
        alert("From node: " + msg);
      },
      this
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to NodeJS on React Native!
        </Text>
        <Button
          title="Message Node"
          onPress={() => {
            nodejs.channel.send('A Message!');
          }}
        />
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NodeReactNative', () => NodeReactNative);
