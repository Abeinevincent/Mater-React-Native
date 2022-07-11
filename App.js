import 'react-native-gesture-handler';
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Settings from './src/screens/Settings';
import Splash from './src/screens/Splash';
import Profile from './src/screens/Profile';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            options={{
              headerShown: false,
              // ...other options you may need to customise
            }}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{headerLeft: null}}
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
