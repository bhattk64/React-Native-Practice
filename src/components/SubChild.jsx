import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { counterContext } from './Parent'


const SubChild = () => {
    const {count,incrementCount}=useContext(counterContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter:{count}</Text>
      <Button title='Counter'onPress={incrementCount} />
    </View>
  )
}

export default SubChild

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    },
    text:{
        fontSize:20,
        marginBottom:10
    }
})