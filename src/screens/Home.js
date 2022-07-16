import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
// import PushNotification from 'react-native-push-notification';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const getData = async () => {
    setIsFetching(true);
    try {
      const res = await axios.get(
        'https://mocki.io/v1/5f879754-51a3-40e6-9c46-29559ac60c05'
      );
      console.log(res.data);
      setData(res.data);
      setIsFetching(false);
    } catch (err) {
      console.log(err);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleNotification = item => {
    // PushNotification.localNotification({
    //   channelId: 'test-channel',
    //   title: `You clicked on ${item.country}`,
    //   message: item.city,
    // });
    console.log('Notifications postponed');
  };
  return (
    <View style={styles.body}>
      {isFetching ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                handleNotification(item);
                navigation.navigate('Map', {
                  city: item.city,
                  lat: item.lat,
                  lng: item.lng,
                });
              }}>
              <View style={styles.container}>
                <Text
                  style={[
                    styles.text,
                    {fontFamily: 'Splash-Regular', fontSize: 40},
                  ]}>
                  {item.country}
                </Text>
                <Text style={styles.text}>{item.city}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    marginVertical: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
});

export default Home;
