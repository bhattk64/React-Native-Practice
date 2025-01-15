import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHooks = () => {
  const [name, setName] = useState('Nikhil');
  const updateName = () => {
    setName('kul');
  };
  return (
    <View>
      <Text style={{fontSize: 20}}>UseStateHooks</Text>
      <Text style={{fontSize: 20}}>Name:{name}</Text>
      {/* <Button title='press' onPress={()=>  setName('Kulchandra')} /> */}
      <Button title="press" onPress={updateName} />
    </View>
  );
};

export default UseStateHooks;
