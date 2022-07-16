import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = ({route}) => {
  const {city, lat, lng} = route.params;
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{city}</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
