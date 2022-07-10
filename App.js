/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BasicComopnents from './src/utils/BasicComponents';
import Buttons from './src/utils/Buttons';
import List from './src/utils/List';
import Styling from './src/utils/Styling';
import TextInput from './src/utils/TextInputComp';

const App = () => {
  return (
    <View style={styles.body}>
      {/* <Buttons /> */}
      {/* <BasicComopnents /> */}
      {/* <Styling /> */}
      {/* <List /> */}
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
