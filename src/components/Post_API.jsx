// import { View, Text, TextInput, Button, Alert } from 'react-native'
// import React, { useState } from 'react'
// import axios from 'axios'

// const Post_API = () => {
//     const[formData,setFormData]=useState({id:' ',name:' ',email:' '})
//     const handleInput=(field,value)=>{
//         setFormData({...formData,[field]:value})
//     }
//     const handleSubmit = async()=>{
//         try{
//          const response=await axios.post('http://10.0.2.2:3000/users',formData)
//          Alert.alert('Success!','Data submitted successfully')
//         console.log(response.data)
//         setFormData({id:' ',name:' ',email:' '})
//         }
//         catch{
//             Alert.alert('Error','Failed to submit data')
//         }
//     }
//   return (
//     <View>
//       <Text style={{textAlign:'center',fontSize:20,marginBottom:10}}>Post_API</Text>
//       <TextInput
//       placeholder='Enter id'
//       value={formData.id}
//       onChangeText={(value) =>handleInput('id',value)} 
//       />
//       <TextInput
//       placeholder='Enter Name'
//       value={formData.name} 
//       onChangeText={(value)=>handleInput('name',value)}
//       />
//       <TextInput
//       placeholder='Enter Email'
//       value={formData.email}
//       onChangeText={(value)=>handleInput('email',value)}
      
//       />
//       <Button title='Submit' onPress={handleSubmit}
//       />
//     </View>
//   )
// }

// export default Post_API



import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Post_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/users', formData);
      Alert.alert('Success!', 'Data submitted successfully');
      console.log(response.data);
      setFormData({ id: '', name: '', email: '' });
    } catch {
      Alert.alert('Error', 'Failed to submit data');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post_API</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInput('email', value)}
        keyboardType="email-address"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Post_API;
