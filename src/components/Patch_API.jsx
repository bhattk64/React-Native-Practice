import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const Patch_API = () => {
    const [formData,setFormData]=useState({id:' ',name:' ',email:' '})
    const handleInput =(field,value)=>{
        setFormData({...formData,[field]:value})
    }
    const handleUpdate= async()=> {
        try {
            const response=await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`,{
                ...formData.name && {name:formData.name},
                ...formData.email && {email:formData.email},
            })
            Alert.alert('Success!!','Data updated successfully')
            console.log(response.data)
            setFormData({id:' ',name:' ',email:' '})
        } catch (error) {
            Alert.alert('Error','Failed to update data')
        }
    }
  return (
    <View>
      <Text style={{fontSize:20,textAlign:'center',marginBottom:10}}>Patch_API</Text>
      <TextInput  
      placeholder='Enter your id'
      value={formData.id}
      onChangeText={(value)=>handleInput('id',value)}
      />
       <TextInput 
      placeholder='Enter your name'
      value={formData.name}
      onChangeText={(value)=>handleInput('name',value)}
      />
       <TextInput 
       placeholder='Enter your email'
       value={formData.email}
       onChangeText={(value)=>handleInput('email',value)}
      />
      <Button title='Update' onPress={handleUpdate} />
    </View>
  )
}

export default Patch_API