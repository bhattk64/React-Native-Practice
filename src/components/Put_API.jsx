import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Put_API = () => {
  const [formData, setFormData] = useState({id: '', name: '', email: ''});

  const handleInput = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://10.0.2.2:3000/users/${formData.id}`,
        {
          name: formData.name,
          email: formData.email,
        },
      );
      Alert.alert('Success!!');
      console.log(response.data);
      setFormData({id: '', name: '', email: ''});
    } catch (error) {
      Alert.alert('Error!!');
    }
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20, marginBottom: 10}}>
        Put_API
      </Text>
      <TextInput
        placeholder="Enter your id"
        value={formData.id}
        onChangeText={value => handleInput('id', value)}
      />
      <TextInput
        placeholder="Enter your name"
        value={formData.name}
        onChangeText={value => handleInput('name', value)}
      />
      <TextInput
        placeholder="Enter your Email"
        value={formData.email}
        onChangeText={value => handleInput('email', value)}
      />
      <Button title="Update your Details" onPress={handleUpdate} />
    </View>
  );
};

export default Put_API;
