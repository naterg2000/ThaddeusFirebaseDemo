import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { initializeApp } from "firebase/app";
import React from 'react';

const LoginEmailField = () => {
  const [text, onChangeText] = React.useState("email");
  const [number, onChangeNumber] = React.useState(null);

  return(
    <SafeAreaView>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LoginEmailField></LoginEmailField>
      <StatusBar style="auto" />
    </View>
  );
}