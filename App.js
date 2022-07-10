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
import Styling from './src/utils/Styling';

const App = () => {
  return (
    <View style={styles.body}>
      {/* <Buttons /> */}
      {/* <BasicComopnents /> */}
      <Styling />
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
