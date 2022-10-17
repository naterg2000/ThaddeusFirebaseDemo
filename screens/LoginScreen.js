import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >

        {/* email input field */}
        <View style={styles.inputContainer}>

            {/* email input field */}
            <TextInput
                placeholder='email'
                //value={ }
                //onChangeText={text => }
                style={styles.input}
            />

            {/* email input field */}
            <TextInput
                placeholder='password'
                secureTextEntry
                //value={ }
                //onChangeText={text => }
                style={styles.input}
            />

        </View> 

        {/* email input field */}
        <View
            style={styles.buttonContainer}
        >
            
            {/* email input field */}
            <TouchableOpacity
                onPress={() => { }}
                style={styles.button}
            >
                <Text>Login</Text>
            </TouchableOpacity>

            {/* email input field */}
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

    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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