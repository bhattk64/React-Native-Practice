import {View, Text, StatusBar, StyleSheet} from 'react-native';
import React from 'react';

const StatusBarExample = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="rgba(0,0,0,0.2)"
        hidden={false}
        translucent={true}
      />
      <Text style={styles.text}>StatusBarExample</Text>
    </View>
  );
};

export default StatusBarExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
