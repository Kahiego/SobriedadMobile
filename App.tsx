import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootNavigator } from './navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';

//------------------ SCREENS --------------------- //
import { Profile } from './screens/Profile/Profile';
import { Home } from './screens/Home/Home';
import Login from './screens/Login/Login';
import Signup from './screens/Login/Signup';


export default function App() {
  return <Signup/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});