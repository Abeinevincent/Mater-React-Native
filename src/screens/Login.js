import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import CustomButton from '../utils/CustomButton';
// import PushNotification from 'react-native-push-notification';

const Login = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const displayText = 'Submit Details';

  // Using redux(custom reducers)
  const login = async () => {
    setIsFetching(true);
    const res = await axios.post(
      'https://expressmysqlapitemplate.herokuapp.com/api/auth/login',
      {email, password},
    );
    console.log(res.data);
    AsyncStorage.setItem('email', email);
    setIsFetching(false);
    navigation.navigate('Home');
  };

  useEffect(() => {
    const getEmail = async () => {
      await AsyncStorage.getItem('email').then(val => {
        if (val != null) {
          navigation.navigate('Home');
        }
      });
    };
    getEmail();
  }, []);

  // const createChannel = () => {
  //   PushNotification.createChannel({
  //     channelId: 'test-channel',
  //     channelName: 'test-channel',
  //   });
  // };

  // useEffect(() => {
  //   createChannel();
  // }, []);

  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={{
          uri: 'data:image/png;base64,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',
        }}
      />
      <Text style={styles.text}>Login Screen</Text>

      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={val => setPassword(val)}
        placeholder="Enter your password"
        secureTextEntry
      />
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <CustomButton onPress={login} displayText={displayText} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'blue',
    width: '100%',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 40,
  },
  input: {
    width: '90%',
    height: 70,
    textAlign: 'center',
    backgroundColor: 'white',
    marginVertical: 20,
    fontSize: 20,
    borderRadius: 10,
  },
});

export default Login;
