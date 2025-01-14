import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PreesableComponents = () => {
    const handlepress=()=>{
        console.log('Button Pressed');
    }
    const handleInPress=()=>{
        console.log('Press In')
    }
    const handleOutPress=()=>{
        console.log('Press Out')
    }
    const handleLongPress=()=>{
        console.log('Long Press')
    }
  return (
    <View style={styles.container}>
     <Pressable style={styles.button}
    //  onPress={handlepress} 
    // onPressIn={handleInPress}
    // onPressOut={handleOutPress}
    onLongPress={handleLongPress}
    delayLongPress={5000}
     
     >
        <Text style={styles.buttontext}>Press Me</Text>
     </Pressable>
    </View>
  )
}

export default PreesableComponents


const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'white'
    },
    button:{
        backgroundColor:'#007bff',
        padding:10,
        borderRadius:5,

    },
    buttontext:{
        color:'white',
        fontSize:18
    }
})