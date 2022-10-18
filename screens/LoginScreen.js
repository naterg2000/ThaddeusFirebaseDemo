import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        }); 
    }

    const handleSignin = () => {
        
        
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height"
        >

            {/* input area */}
            <View style={styles.inputContainer}>

                {/* email input field */}
                <TextInput
                    placeholder='email'
                    value={ email }
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />

                {/* password input field */}
                <TextInput
                    placeholder='password'
                    secureTextEntry
                    value={ password }
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                />

            </View> 

            {/* button area */}
            <View
                style={styles.buttonContainer}
            >
                
                {/* login button */}
                <TouchableOpacity
                    onPress={ handleSignin }
                    style={styles.button}
                >
                    <Text>Login</Text>
                </TouchableOpacity>

                {/* register button */}
                <TouchableOpacity
                    onPress={ handleSignup }
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>

            </View>

        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    inputContainer: {
        width: '80%',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5, 
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    }
           

})