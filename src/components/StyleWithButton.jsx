import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'

const StyleWithButton = () => {
  return (
    <View>
      <Button title='Basic Button' color={'green'} />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.buttontext}>Touchable Opacity Button</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} underlayColor='red' onPress={()=>{
        console.log('Button Pressed')
      }}>
        <Text style={styles.buttontext}>Touchable Highlight button</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
  button:{
    margin:20,
    backgroundColor:'purple',
    padding:20,
    borderRadius:24,
    elevation:5 

  },
  buttontext:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  },
})

export default StyleWithButton