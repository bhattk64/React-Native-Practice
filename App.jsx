import { View } from 'react-native'
import React from 'react'
// import AsyncStorageExample from './src/components/AsyncStorageExample'
// import ImageComponentExample from './src/components/ImageComponentExample'
// import Parent from './src/components/Parent'
import {Provider}from 'react-redux'
import { store } from './src/redux/store/store'
import Counter from './src/components/Counter'

const App = () => {
  return (
    // <View style={{flex:1}}>
    //   {/* <AsyncStorageExample/> */}
    //   {/* <ImageComponentExample/> */}
    //   {/* <Parent/> */}
    // </View>
    <Provider store={store}>
    <Counter/>


    </Provider>
  )
}

export default App