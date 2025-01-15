import {View, Text, Button} from 'react-native';
import React from 'react';

const OnClick = () => {
  let name = 'Nikhil';
  const getName = () => {
    name = 'Kul chandra';
    console.log('Name:', name);
  };
  return (
    <View>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title="Press" onPress={getName} />
      {/* <Button title="press" onPress={()=>getName('Nikhil')}/> */}
    </View>
  );
};

export default OnClick;
