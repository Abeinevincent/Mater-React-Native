import React, {useState} from 'react';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';

const Buttons = () => {
  const [count, setCount] = useState(0);

  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setCount(count + 1);
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      {/* Buttons [uncomment other buttons to explore how they are working] */}
      {/* Normal sample button */}
      {/* <Button title="Sample Button" /> */}

      {/* Button inside a View to have customstyles since you cannot style a button */}
      {/* <View style={styles.button}>
        <Button title="View Button" />
      </View> */}

      {/* Button with inline onPress function  */}
      {/* This iniline function passed opens an external url when the phone is connected to the internet */}
      {/* <Button
      title="Open Passed URL"
      onPress={() => Linking.openURL('https:www.github.com')}
    /> */}

      {/* Button with external onPress function */}
      {/* Basic counter */}
      <Button title="Sample Button" onPress={handlePress} />

      {/* Increment, decrement and reset buttons */}
      <Button title="Increment Button" onPress={increment} />
      <Button title="Decremet Button" onPress={decrement} />
      <Button title="Reset Button" onPress={reset} />

      {/* useState() with boolean values */}
      <TextInput onFocus={() => setChecked(!checked)} style={styles.input} />

      {checked && <Text>Input is focused</Text>}
      {/* OR */}
      {checked ? <Text>Input is focused</Text> : null}
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
  button: {
    margin: 20,
    padding: 10,
    backgroundColor: '#438934',
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 2,
  },
});

export default Buttons;
