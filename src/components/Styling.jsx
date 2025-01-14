import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import styles from './style/Style'


const Styling = () => {
  return (
    <View>
<Text style={{fontSize:20,backgroundColor:'red',color:'black'}}>Inline Styling</Text>

<Text style={style.text}>Internal Styling</Text>

<Text style={styles.text}>External Styling</Text>
    </View>
  )
}

const style=StyleSheet.create({
    text:{
        backgroundColor:'green',
        color:'white',
        fontSize:20,
        marginVertical:10,
        padding:5,
        borderWidth:5
    }
})

export default Styling