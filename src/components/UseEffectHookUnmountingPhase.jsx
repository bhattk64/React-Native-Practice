import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ShowChild from './ShowChild'


const UseEffectHookUnmountingPhase = () => {
    const[showChild,setShowChild]=useState(true)

  return (
    <View>
      <Text style={{fontSize:30}}>UseEffectHookUnmountingPhase</Text>
      {
        showChild ? <ShowChild/> : null
      }
      <Button 
      title='Toggle' onPress={()=>
        setShowChild(!showChild)}
      />
    </View>
  )
}

export default UseEffectHookUnmountingPhase