import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>{
       Platform.OS==='ios'?'Welcome IOS Users!!!':'Welcome Android Users!!'
}</Text>
      <Text style={styles.platformText}>You are using Android device</Text>
    </View>
  )
}

export default PlatformExample

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue'
    },
    welcomeText:{
        fontSize:20,
        color:'white',
        marginBottom:10
    },
    platformText:{
        fontSize:15,
        color:'white',

    }
})