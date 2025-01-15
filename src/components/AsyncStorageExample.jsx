import {View, Text, TextInput, Button, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {
  const [userName, setUserName] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const saveUsername = async () => {
    await AsyncStorage.setItem('username', userName);
    setUserName('');
    Alert.alert('UserName Saved');
  };
  const getUsername = async () => {
    const savedUserName = await AsyncStorage.getItem('username');
    if (savedUserName) {
      setStoredUsername(savedUserName);
    } else {
      Alert.alert('Username Not Found');
    }
  };
  const removeUsername = async () => {
    await AsyncStorage.removeItem('username');
    setStoredUsername('');
    Alert.alert('Username Removed');
  };
  useEffect(() => {
    getUsername();
  }, []);
  return (
    <View>
      <TextInput
        placeholder="Enter Username"
        value={userName}
        onChangeText={setUserName}
      />
      <Button title="Save username" onPress={saveUsername} />
      <Button title="Get username" onPress={getUsername} />
      <Button title="Remove username" onPress={removeUsername} />
      <Text>Stored Username:{storedUsername}</Text>
    </View>
  );
};

export default AsyncStorageExample;
