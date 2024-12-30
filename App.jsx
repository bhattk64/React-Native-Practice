import React from 'react'
import {Text,View,Button}from 'react-native'
import First from './src/components/First'

const App = () => {
  return (
    <View>
   <Text style={{fontSize:30}}>React native mobile app developer</Text>
   <Text style={{fontSize:30}}>React native mobile app </Text>
   <Button title='Press Here' />
   <First/>
    </View>
     
    
  )
}



export default App