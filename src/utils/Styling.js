import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Styling = () => {
  return (
    <View style={styles.body}>
      <View style={styles.mainv1}>
        <View style={styles.v11}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.v12}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.v13}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>

      <View style={styles.mainv2}>
        <View style={styles.v21}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.v22}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.mainv3}>
        <View style={styles.v31}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.v32}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  mainv1: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    flex: 1,
  },
  v11: {
    flex: 1,
    backgroundColor: '#378787',
    justifyContent: 'center',
    alignItems: 'center',
  },
  v12: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123093',
  },
  v13: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#945782',
  },
  mainv2: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: 'green',
  },
  v21: {
    flex: 1,
    backgroundColor: '#ab3456',
    justifyContent: 'center',
    alignItems: 'center',
  },
  v22: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainv3: {
    flexDirection: 'row',
    flex: 9,
    backgroundColor: 'red',
  },
  v31: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  v32: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 25,
  },
});

export default Styling;
