import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Delete_API = () => {
    const [id,setId]=useState()
    const handleDelete = async()=>{
        try {
            const response= await axios.delete(`http://10.0.2.2:3000/users/${id}`)
            Alert.alert('success','Data Deleted Success!!')
            setId('')
        } catch (error) {
            
            Alert.alert('Error!!','Failed to delete')
        }
    }
  return (
    <View>
      <Text style={{fontSize:24,marginBottom:10,textAlign:'center'}}>Delete_API</Text>
      <TextInput
      placeholder='Enter id'
      value={id}
      onChangeText={(value)=>setId(value)}
      />
      <Button title='Delete' onPress={handleDelete} />
    </View>
  )
}

export default Delete_API