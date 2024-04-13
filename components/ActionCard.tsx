import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink:string){
    Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
    <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Anything new ??</Text>
    </View>
    <Image
    source={{
        uri:'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }}
    style={styles.cardImage}
    />
    <View style={styles.bodyContainer}>
        <Text numberOfLines={3}>
        A Cup of Black Coffee and Biscuits
</Text>
    </View>

    <View style={styles.foooterContainer}>
       <TouchableOpacity
       onPress={()=>openWebsite('https://blog.learncodeonline.in/writing-guide')}>
        <Text style={styles.socialLink}>Explore More....</Text>
       </TouchableOpacity>

       <TouchableOpacity
       onPress={()=>openWebsite('https://www.instagram.com/nikhil__bhatta/')}>
        <Text style={styles.socialLink}>Follow Me</Text>
       </TouchableOpacity>

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
        height:360,
        borderRadius:16,
        marginVertical:12,
        marginHorizontal:16,
    },
    elevatedCard:{
        backgroundColor:'gray',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
   
    headingContainer:{
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    headerText:{
        color:'black',
        fontSize:16,
        fontWeight:'600'
    },
    cardImage:{
        height:190
    },
    bodyContainer:{
        padding:10,
    },
    foooterContainer:{
        padding:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink: {
        fontSize: 16,
        color: '#000000',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6
        
    }

})