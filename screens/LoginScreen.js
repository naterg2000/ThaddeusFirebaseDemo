import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web'
import auth from '@react-native-firebase/auth';

const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = () => {
        
    };
    
    return (
        <KeyboardAvoidingView>

        <Text>Login Screen</Text>

            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="email"
                    //value={email}
                    //onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    placeholder="password"
                    //value={password}
                    //onChangeText={text => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            <View style={styles.buttonContainer}>

                {/* login button */}
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                {/* register button */}
                <TouchableOpacity
                    onPress={() => { }}
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
        flext: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15, 
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },
    button: {
        backgroundColor: '#0782F9',
        width: '100',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
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
    },
})