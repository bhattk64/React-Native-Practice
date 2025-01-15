import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        if (email && password && confirmPassword) {
            if (password === confirmPassword) {
                Alert.alert('Registration Successful');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
            } else {
                Alert.alert('Password does not match');
                return;
            }
        } else {
            Alert.alert('Please fill all the fields');
            return;
        }
    };

    return (
        <View className='flex-1 justify-center items-center bg-gray-900 p-5'>
            <View className='p-8 bg-gray-800 rounded-lg w-full flex justify-center items-center'>
                <Text className='text-white text-2xl font-bold mb-5 text-center'>Register</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor={'#ccc'}
                    className="w-full h-12 bg-gray-700 rounded-lg text-white px-4 mb-4"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={'#ccc'}
                    className="w-full h-12 bg-gray-700 rounded-lg text-white px-4 mb-4"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={'#ccc'}
                    className="w-full h-12 bg-gray-700 rounded-lg text-white px-4 mb-4"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />
                <TouchableOpacity className="w-full bg-indigo-500 py-3 rounded-lg" onPress={handleRegister}>
                    <Text className="text-center text-white text-lg font-semibold">Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
