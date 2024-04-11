import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return ( 
    <View>
      <Text style={styles.headingText}>Trending Places </Text>
      <View style={[styles.card, styles.cardElevated]}>
      <Image
      source={{
        uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg'
      }}
      style={styles.cardImage}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>The Colosseum</Text>
        <Text style={styles.cardLabel}>Built in 1980</Text>
        <Text style={styles.cardDescription}>The Colosse um, also known as the Flavian Amphitheatre, is an arena in the city of Rome, Italy.</Text>
        <Text style={styles.cardFooter}>10min away </Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8

    },
    card:{
      width:350,
      height:350,
      borderRadius:8,
      marginVertical:12,
      marginHorizontal:14
    },
    cardElevated:{
    backgroundColor:'white',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1
    }
    }, 
     cardImage:{
      height:180,
      marginBottom:8,
      borderTopLeftRadius:12,
      borderTopRightRadius:6

     },
     cardBody:{
      flex:1,
       flexGrow:1,
       paddingHorizontal:10
     },

     cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6,
        color:'black'
     },
     cardLabel:{
        fontSize:15,
        color:'black',
        marginBottom:4
     },
     cardDescription:{
        color:'#242B2E',
        fontSize:12,
        marginBottom:6,
        marginTop:5,
        flexShrink:2
     },
     cardFooter:{
        color:'black',


     },

})