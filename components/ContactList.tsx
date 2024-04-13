import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            name:'kul chandra bhatt',
            status:'no call only whatsapp',
            imageUrl:'https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/434202953_1086133639326560_8003947266573771170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=m88gW42LwgkAb4BfG2T&_nc_ht=scontent.fdel29-1.fna&oh=00_AfD01evqRYTnWo_Y8U4EBIxObax0LeZT38eRuw971p0Xaw&oe=662059DA',
        },
        {
            uid:2,
            name:'nikhil',
            status:'I love code',
            imageUrl:'https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/387802097_997999461473312_6136766209421863492_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CHBUfXaOY3kAb6xRT3I&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBNT9fJ_gsagprvFkjVWZuMn_CAqlzu2Zm2iZ0YisurRw&oe=662035F0',
        },
        {
            uid:3,
            name:'atul',
            status:'Busy',
            imageUrl:'https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/375058598_979893396617252_3502473547365985740_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pMQu7-xrTeUAb60I3f4&_nc_ht=scontent.fdel29-1.fna&oh=00_AfBcBLxqzLmru4gt0z_fBMvuTReTRTcJsZ0iWFIYghnxLg&oe=662033D1',

        },
        {
            uid:4,
            name:'Nanu',
            status:'urgent calls only',
            imageUrl:'https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/279485450_685057792767482_508631846548904697_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5iRb6kipyWkAb6F7DcG&_nc_ht=scontent.fdel29-1.fna&oh=00_AfAz89A_5lI6vr33IRbooTPHkESTaat7vdbOi23jXEKOPg&oe=66203809',
        },
    ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container}
      scrollEnabled={false}>
        {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                />
               <View> 
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>


            </View>
        ))}

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10
    },

    container:{
        paddingHorizontal:15,
        marginBottom:5

    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,
        backgroundColor:'#8D3DAF',
        padding:8,
        borderRadius:14
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight:15
    },
    userName:{
    fontSize:16,
    fontWeight:'600',
    color:'white'
    },
    userStatus:{
        fontSize:12,
        color:'white'
        
    }


})