import {View, Text} from 'react-native';
import React from 'react';

//jsx =javascript syntax extension
//we can only write javacript expression on jsx we cant write statement because it doesnt return anything
const JSX = () => {
  let name = 'Nikhil';
  return (
    <View>
      <Text style={{fontSize: 30}}>JSX</Text>
      <Text style={{fontSize: 20}}>Hello {name}</Text>
    </View>
  );
};

export default JSX;
