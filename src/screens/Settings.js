import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../utils/CustomButton';

const Settings = ({navigation}) => {
  const displayText = 'Navigate To Home Screen';
  const displayText2 = 'Navigate To Profile Screen';

  const onPressHandler = () => {
    navigation.navigate('Home');
  };
  const onPressHandler2 = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Settings Screen</Text>
      <CustomButton displayText={displayText} onPress={onPressHandler} />
      <CustomButton displayText={displayText2} onPress={onPressHandler2} />
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
  },
});

export default Settings;
