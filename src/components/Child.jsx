import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    console.log(props.data)
  return (
    <View>
      <Text style={{fontSize:20}}>Child</Text>
      <Text style={{fontSize:20}}>{props.data}</Text>
    </View>
  )
}

export default Child