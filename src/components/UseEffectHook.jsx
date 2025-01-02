import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import UseStateHooks from './UseStateHooks'

const UseEffectHook = () => {
    const [count,setCount]=useState(1);
    useEffect(()=>{
        console.log('API calling')
    },[])
  return (
    <View>
      <Text style={{fontSize:30}}>UseEffectHook</Text>
      <Text style={{fontSize:30}}>count :{count}</Text>
      <Button title='Counter'onPress={()=>setCount(count+1)}
      />
    </View>
  )
}

export default UseEffectHook