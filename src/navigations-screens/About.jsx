import { View, Text } from 'react-native'
import React from 'react'

const About = (props) => {
  const {username}=props.route.params
  //console.log(props)
  return (
    <View>
      <Text>{username}</Text>
    </View>
  )
}

export default About