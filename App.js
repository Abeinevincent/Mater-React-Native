/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
 
  return (
    <View>
      <Text>Our starter text in application</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default App;
