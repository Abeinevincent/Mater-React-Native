import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const CustomButton = ({onPress, displayText}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        android_ripple={{color: "#d34"}}
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#dddddd' : '#fe3213'},
        ]}
        //   style={styles.button}
      >
        <Text style={styles.text}>{displayText}</Text>
      </Pressable>
      {/* <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{displayText}</Text>
      </TouchableHighlight> */}
      {/* <TouchableWithoutFeedback onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{displayText}</Text>
      </TouchableWithoutFeedback> */}
      {/* <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{displayText}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#abb769"
  },
  button: {
    backgroundColor: '#ae4512',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

export default CustomButton;
