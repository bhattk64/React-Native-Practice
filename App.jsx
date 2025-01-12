import { View } from 'react-native'
import React from 'react'
// import AsyncStorageExample from './src/components/AsyncStorageExample'
// import ImageComponentExample from './src/components/ImageComponentExample'
import Parent from './src/components/Parent'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <AsyncStorageExample/> */}
      {/* <ImageComponentExample/> */}
      <Parent/>
    </View>
  )
}

export default App