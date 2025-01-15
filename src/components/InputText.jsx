import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import UseStateHooks from './UseStateHooks';

const InputText = () => {
  const [username, setUserName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>InputText</Text>
      <Text style={{fontSize: 20}}>UserName:{username} </Text>
      <TextInput
        style={{fontSize: 20, borderWidth: 2, borderColor: 'green', margin: 15}}
        value={username}
        placeholder="Enter your username"
        onChangeText={value => setUserName(value)}
      />
      <Button title="clear" onPress={() => setUserName('')} />
    </View>
  );
};

export default InputText;
