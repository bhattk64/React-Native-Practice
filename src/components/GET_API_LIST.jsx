import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './style/Style'

const GET_API_LIST = () => {
    const[myData,setMyData]=useState([])
    useEffect(()=>{
     axios.get('http://10.0.2.2:3000/users').then((response)=>{
        setMyData(response.data)
     })
    },[])
 const renderItem=({item})=>(
<View>
    <Text>{item.name}</Text>
    <Text>{item.email}</Text>
    
</View>
 )
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20,textAlign:'center',marginBottom:10}}>Users</Text>
      <FlatList
      data={myData}
      renderItem={renderItem}
      keyExtractor={(item)=>item.id.toString()}
      />
    </View>
  )
}

export default GET_API_LIST

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'gray',
    padding:20

  },
  header:{
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    color:'red',
    marginBottom:10,
    textAlign:'center'
  },
  card:{
    backgroundColor:'#fff',
    padding:10,
    marginBottom:10,
    borderRadius:20,
    shadowColor:'#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    elevation:8,
    borderLeftWidth:5,
    borderLeftColor:'#00796b'

  },
  name:{
    fontSize:18,
    fontWeight:'bold'
  },
  email:{
    fontSize:16,
    color:'#00796b',
    marginBottom:10,

  }
})
