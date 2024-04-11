import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>For</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Magic</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Ullu banaya bhai ko😂😂</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({ headingText:{
    fontSize:40,
    fontWeight:'bold',
    color:'green',
    paddingHorizontal:10,
    

},

card:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    borderRadius:6,
    margin:8,
    
},
cardElevated:{
    backgroundColor:'blue',
    elevation:16,
    shadowOffset:{
        width:1,
        height:1
    },
    shadowColor:'red',
    shadowOpacity:0.6,
    shadowRadius:2
},
container:{
    padding:9
}


})