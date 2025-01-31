import {View, Text, Button, Alert} from 'react-native';
import React from 'react';

const showAlert = () => {
  Alert.alert(
    'Alert Title',
    'Danger Zone !!',
    [
      {
        text: 'Cancel',
        onPress: () => {
          console.log('Cancel');
        },
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          console.log('OK');
        },
      },
    ],
    {cancelable: false},
  );
};

const AlertExample = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>AlertExample</Text>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
};

export default AlertExample;
