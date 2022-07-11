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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 25 : 20;
            color = focused ? 'red' : '#ddd';
          } else if (route.name === 'Settings') {
            size = focused ? 25 : 20;
            color = focused ? 'red' : '#ddd';
            iconName = 'cog';
          } else if (route.name === 'Profile') {
            color = focused ? 'red' : '#ddd';
            size = focused ? 25 : 20;
            iconName = 'user';
          }
          return <FontAwesome5 size={size} color={color} name={iconName} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "yellow",
        inactiveTintColor: "gray",
        activeBackgroundColor: "#eee",
        inactiveBackgroundColor: "#fff",
      }}
      >
      <Tab.Screen options={{tabBarBadge: 2}} name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const RootStack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Splash">
          <RootStack.Screen
            options={{
              headerShown: false,
              // ...other options you may need to customise
            }}
            name="Splash"
            component={Splash}
          />
          <RootStack.Screen name="HomeTabs" component={HomeTabs} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
