import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../utils/CustomButton';
import { set } from 'immer/dist/internal';

const Home = ({navigation}) => {
  const displayText = 'Update Details';
  const displayText2 = 'Remove Details';
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const [email, setEmail] = useState("")

  const onPress = async () => {
    if (name.length == 0) {
      Alert.alert('WARNING!', 'Name cannot be empty');
    } else {
      try {
        const user = {
          Name: name,
          Age: age,
        };
        AsyncStorage.mergeItem('user', JSON.stringify(user));
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onPress2 = () => {
    if (name.length == 0) {
      Alert.alert('WARNING!', 'Name cannot be empty');
    } else {
      AsyncStorage.clear();
      navigation.navigate('Login');
    }
  };

  useEffect(() => {
    const getData = async () => {
      await AsyncStorage.getItem('user')
        .then(val => {
          if (val != null) {
            let user = JSON.parse(val);
            setName(user.Name);
            setAge(user.Age);
          }
        })
        .catch(err => console.log(err));
    };
    getData();
  }, []);

  useEffect(() => {
    const getLocalData = async () => {
      await AsyncStorage.getItem("email").then(val => {
        if(val != null) {
          setEmail(val)
        }
      })
    }
    getLocalData()
  })

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>Welcome! {name}</Text>
      <Text style={styles.text}>Welcome! {age}</Text>
      <Text style={styles.text}>Welcome! {email}</Text>
      <TextInput
        value={name}
        onChangeText={value => setName(value)}
        style={styles.input}
        placeholder="Enter your name"
      />
      <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.input}
        placeholder="Enter your age"
      />
      <CustomButton onPress={onPress} displayText={displayText} />
      <CustomButton onPress={onPress2} displayText={displayText2} />
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

export default Home;
