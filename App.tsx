import {View} from 'react-native';
import React from 'react';
// import Login from './src/componenents/Login';
import Register from './src/components/Register';

const App = () => {
  return (
    <View className="flex-1">
      {/* <Login/> */}
      <Register />
    </View>
  );
};

export default App;
