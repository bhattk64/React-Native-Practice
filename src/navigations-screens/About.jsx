import {View, Text, Button} from 'react-native';
import React from 'react';

const About = props => {
  const {username} = props.route.params;
  //console.log(props)
  return (
    <View>
      <Text> Welcome !!{username}</Text>
      <Button title="Go Back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

export default About;
