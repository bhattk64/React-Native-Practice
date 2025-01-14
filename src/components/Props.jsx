import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [count,setCount]=useState(0)
  return (
    <View>
      <Text style={{fontSize:20}}>Props</Text>
      <Child data={count}/>
      <Button title='counter' onPress={()=> setCount(count+1) }/>
    </View>
  )
}

export default Props