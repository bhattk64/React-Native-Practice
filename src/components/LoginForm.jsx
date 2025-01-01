import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const handleLogin=()=>{
        console.log('Email: ',email)
        console.log('Password:',password)
        setEmail('')
        setPassword('')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login Form</Text>
      <TextInput
      style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#999'
      />
      <TextInput
      style={styles.input}
      placeholder='passowrd'
      value={password}
      onChangeText={setPassword}
      placeholderTextColor='#999'
      secureTextEntry
/>
       <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttontext}>Login</Text>
       </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        paddingHorizontal:17,
        paddingVertical:32,
        backgroundColor:'gray',
    },

    heading:{
      fontSize:24,
      fontWeight:'bold',
      marginBottom:30,
      textAlign:'center',
      color:'black'
    },
    input:{
      height:50,
      borderColor:'#ccc',
      borderWidth:1,
      marginBottom:20,
      paddingHorizontal:15,
      borderRadius:10,
      fontSize:16,
      backgroundColor:'#fff',
      color:'black'
    },

    button:{
      backgroundColor:'#4CAF50',
     
      borderRadius:10,
      paddingVertical:15,
      alignItems:'center'

    },
    buttontext:{
      color:'#fff',
      fontSize:16,
      fontWeight:'bold'

    }
})

export default LoginForm