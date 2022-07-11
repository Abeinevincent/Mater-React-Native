import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
} from 'react-native';

const CustomButton = ({onPress, displayText}) => {
  return (
      <Pressable
        onPress={onPress}
        android_ripple={{color: "#d34"}}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#dddddd' : '#fe3213'},
        ]}
      >
        <Text style={styles.text}>{displayText}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ae4512',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default CustomButton;
