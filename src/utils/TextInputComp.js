import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Alert,
  ToastAndroid,
  Modal,
} from 'react-native';
import CustomButton from './CustomButton';

const TextInputComp = () => {
  const [name, setName] = useState('');
  const [pressed, setPressed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onPress = () => {
    if (name.length > 3) {
      setPressed(!pressed);
    } else {
      // Alert.alert(
      //   'Warning!',
      //   'Name must be atleast 4 characters',
      //   [
      //     {text: 'Donot Show Again', onPress: console.warn('OKD Pressed')},
      //     {text: 'Cancel', onPress: console.warn('Cancel Pressed')},
      //     {text: 'Ok', onPress: console.warn('OK Pressed')},
      //   ],
      //   {cancelable: true, onDismiss: () => console.warn('Alert dismissed')},
      // );

      // Using Toast
      // ToastAndroid.show("Name must be atleast 4 characters",
      // // ToastAndroid.SHORT
      // ToastAndroid.LONG
      // )
      // ToastAndroid.showWithGravity("Name must be atleast 4 characters",
      // ToastAndroid.LONG,
      // ToastAndroid.CENTER
      // )

      // ToastAndroid.showWithGravityAndOffset("Name must be atleast 4 characters",
      // ToastAndroid.LONG,
      // ToastAndroid.TOP,
      // 0,
      // 0
      // )

      // Using a modal and custom alert
      setShowModal(true);
    }
  };

  const displayText = !pressed ? 'Press Me' : 'Clear';

  return (
    <View style={styles.body}>
      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={styles.warning_modal}>
          <View style={styles.warning_modal_inner_view}>
            <Text style={styles.text}>The name must be atleast 4 characters</Text>
          </View>
        </View>
      </Modal>
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
  warning_modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // ... have here your custom styles to display the modal the way you want
  },
  warning_modal_inner_view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: "80%",
    marginVertical: 200
    // ... have here your custom styles to display the modal the way you want
  },
});

export default TextInputComp;
