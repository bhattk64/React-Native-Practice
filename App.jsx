import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab=createMaterialTopTabNavigator()
const chatScreen=()=>(
  <View style={styles.container}>
    <Text style={styles.text}>Chats</Text>
  </View>
)
const statusScreen=()=>(
  <View style={styles.container}>
    <Text style={styles.text}>status</Text>
  </View>
)
const callScreen=()=>(
  <View style={styles.container}>
    <Text style={styles.text}>call</Text>
  </View>
)
const App = () => {
  return (
   <NavigationContainer>
   <Tab.Navigator
   screenOptions={{
    tabBarActiveTintColor:'#34A85A',
    tabBarInactiveTintColor:'#000',
    tabBarStyle:{
      backgroundColor:'#fff',
      height:50,
      shadowColor:'#000',
      shadowOffset:{width:0,height:2},
      shadowOpacity:0.2,
      shadowRadius:4,
      elevation:5
},
tabBarIndicatorStyle:{
  backgroundColor:'#34A85A',
  height:3,
  width:50,
  borderRadius:3,
  

},
tabBarLabelStyle:{
  fontSize:12,
  fontWeight:'bold',
  marginHorizontal:10
}
   }}
   
   >
    <Tab.Screen name="chats" component={chatScreen} />
    <Tab.Screen name="Status" component={statusScreen} />
    <Tab.Screen name="Calls" component={callScreen} />
    
   </Tab.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'

  },
  text:{
    fontSize:20,
    color:'#000',
    fontWeight:'bold'

  }
})