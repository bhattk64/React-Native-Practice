import React, {Component} from 'react';
import {View, Text} from 'react-native';
import SecondClass from './SecondClass';

class ClassComponenets extends Component {
  render() {
    const age = 21;
    return (
      <View>
        <Text style={{fontSize: 30}}>Class components</Text>
        <SecondClass data={age} />
      </View>
    );
  }
}
export default ClassComponenets;
