import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

const BasicComponents = () => {
  return (
    // Basic components include;
    // Text, View, ScrollView, StyleSheet, TextInput, Image
    <View style={styles.body}>
      {/* <ScrollView style={{margin: 50}}> */}
      <Text style={{color: 'black', fontSize: 20}}>Basic Components</Text>
      <TextInput placeholder='Enter your name..' style={styles.input} />
      {/* </ScrollView> */}
    </View>
    // Image will be talked about in the next sessions
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  input: {
    width: '90%',
    height: 70,
    backgroundColor: 'white',
    paddingHorizontal: 20
  },
});

export default BasicComponents;
