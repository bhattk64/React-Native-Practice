import React from 'react'
import {SafeAreaView,View,Text, ScrollView} from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'


function Appp(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards/>
        <ElevatedCard/>
        <FancyCards/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  )
}




export default Appp