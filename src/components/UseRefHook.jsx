import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef} from 'react';

const UseRefHook = () => {
  const myRef = useRef();
  const handleRef = () => {
    myRef.current.setNativeProps({
      text: 'Kulchandra',
      style: {color: 'white ', backgroundColor: 'crimson'},
    });
    myRef.current.focus();
  };
  return (
    <View style={styles.container}>
      <TextInput
        ref={myRef}
        style={styles.input}
        placeholder="Enter your text"
        placeholderTextColor="gray"
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
    fontSize: 15,
    marginBottom: 20,
  },
  InputText: {
    fontSize: 20,
  },

  button: {
    width: '90%',
    height: '10%',
    backgroundColor: 'blue',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
