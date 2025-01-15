import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const togloadder = () => {
    setLoading(!loading);
  };
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size='large' color={'red'} /> */}
      <TouchableOpacity style={styles.button} onPress={togloadder}>
        <Text style={styles.buttontext}>
          {loading ? 'Hide Loader' : 'Show Loader'}
        </Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loaderContent}>
          <ActivityIndicator size="large" color={'red'} />
          <Text style={styles.loadingtext}>Loading....</Text>
        </View>
      )}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  button: {
    paddingVertical: 12,
    padding: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttontext: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  loaderContent: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    elevation: 5,
  },

  loadingtext: {
    marginTop: 10,
    fontSize: 18,
    color: 'greenn',
    fontWeight: '600',
  },
});
