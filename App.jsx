import { SafeAreaView } from 'react-native'
import React from 'react'
import MyLogin from './src/components/MyLogin'



// import AsyncStorageExample from './src/components/AsyncStorageExample'
// import ImageComponentExample from './src/components/ImageComponentExample'
// import Parent from './src/components/Parent'
// import {Provider}from 'react-redux'
// import { store } from './src/redux/store/store'
// import Counter from './src/components/Counter'
// import One from './src/components/One'

const App = () => {
  
  return (
    // <View style={{flex:1}}>
    //   {/* <AsyncStorageExample/> */}
    //   {/* <ImageComponentExample/> */}
    //   {/* <Parent/> */}
    //   {/* <One/> */}
     
    // </View>
    // <Provider store={store}>
    // <Counter/>


    // </Provider>
    <SafeAreaView className='flex-1'>
      <MyLogin/>

    </SafeAreaView>
    
  )
}

export default App