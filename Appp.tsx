import React from 'react'
import {SafeAreaView,View,Text, ScrollView} from 'react-native'
import FlatCards from './components/FlatCards'


function Appp(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards/>
      </ScrollView>
    </SafeAreaView>
  )
}




export default Appp