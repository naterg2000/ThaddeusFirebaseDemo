import React from 'react';
import { initializeApp } from "firebase/app";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();


//initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyDy0Etajo_OjQlBL9kBa6zsiYzWxYuGGVI",
  authDomain: "thaddeusfirebasedemo.firebaseapp.com",
  projectId: "thaddeusfirebasedemo",
  storageBucket: "thaddeusfirebasedemo.appspot.com",
  messagingSenderId: "186764906243",
  appId: "1:186764906243:web:380c4fe01968b331c4a336"
};
const app = initializeApp(firebaseConfig);

//render app
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});