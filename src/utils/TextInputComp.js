import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import CustomButton from './CustomButton';

const TextInputComp = () => {
  const [name, setName] = useState('');
  const [pressed, setPressed] = useState(false);

  const onPress = () => {
    setPressed(!pressed);
  };

  const displayText = !pressed ? "Press Me" : "Clear"

  return (
    <View style={styles.body}>
      {pressed && <Text style={styles.text}>The name entered is {name}</Text>}
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={value => setName(value)}
        placeholder="Enter your name"
      />
      <CustomButton displayText={displayText} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 20,
    margin: 10,
    color: 'white',
    fontSize: 20,
  },
});

export default TextInputComp;
