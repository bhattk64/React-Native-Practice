import React from 'react'
import {SafeAreaView,View,Text, ScrollView} from 'react-native'
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'


function Appp(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <FlatCards/>
        <ElevatedCard/>
        <FancyCards/>
        <FancyCards/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}




export default Appp