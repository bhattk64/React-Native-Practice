import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const ShowChild = () => {
  useEffect(() => {
    //    console.log('I am a child component')
    return () => {
      console.log('Child Component Unmounted');
    };
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>ShowChild</Text>
    </View>
  );
};

export default ShowChild;
