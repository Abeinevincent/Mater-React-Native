import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomButton from '../utils/CustomButton';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <ImageBackground
      style={styles.body}
      source={{
        uri: 'https://media.istockphoto.com/vectors/cosmic-shining-abstract-background-vector-id874402896?k=20&m=874402896&s=612x612&w=0&h=j0PoEIOMJXOkHE7Y9ooj9Cd23XqwNTWbyHakMuo3uDY=',
      }}>
      <Text style={styles.text}>Splash Screen</Text>
    </ImageBackground>
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
  },
});

export default Splash;
