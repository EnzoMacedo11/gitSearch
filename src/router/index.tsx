import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Profile from '../pages/profile';
import UserProvider from '../context/userContext';
import History from '../pages/history';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
   
    <NavigationContainer>
       
      <UserProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
      </UserProvider>
     
    </NavigationContainer> );
}