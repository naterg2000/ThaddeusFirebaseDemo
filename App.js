import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from 'react';

//create the email login field
const LoginEmailField = () => {
  const [text, onSubmitEditing] = React.useState("email");

  return(
    <SafeAreaView>
      <TextInput 
        style={styles.input}
        onSubmitEditing={() => "Hello!"}
        placeholder={text}
      />
    </SafeAreaView>
  );
};

//create the password login field
const LoginPasswordField = () => {
  const [text, onChangeText] = React.useState("password");
  const [number, onChangeNumber] = React.useState(null);

  return(
    <SafeAreaView>
      <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={text}
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

//render app
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Firebase Demo!</Text>
      <LoginEmailField></LoginEmailField>
      <LoginPasswordField></LoginPasswordField>
      <StatusBar style="auto" />
    </View>
  );
}