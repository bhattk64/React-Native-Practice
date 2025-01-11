import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab=createBottomTabNavigator()
const getTabBarIcon=(routeName,focused,color,size)=>{
  let iconName
  if(routeName==='Home'){
    iconName=focused?'home':'home-outline'
  }
  else if(routeName==='Profile'){
    iconName=focused?'person':'person-outline'
 }
 else if(routeName==='Settings'){ 
  iconName=focused?'settings':'settings-outline'
 }
 return <Icon name={iconName} size={size} color={color} />

}
const HomeScreen=()=>(
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>

  </View>
)
  const ProfileScreen=()=>(
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  )
  const SettingsScreen=()=>(
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
    </View>
  )

const App = () => {
  return (
  <NavigationContainer>
<Tab.Navigator
screenOptions={({route})=>({
  tabBarIcon:({focused,size,color})=>getTabBarIcon(route.name,focused,color,size),
tabBarActiveTintColor:'#007Bff',
tabBarInactiveTintColor:'#333',
tabBarStyle:{backgroundColor:'#fff',height:60,paddingBottom:5}
})}
> 
  <Tab.Screen  name='Home' component={HomeScreen} />
  <Tab.Screen name='Profile' component={ProfileScreen} />
  <Tab.Screen name='Settings' component={SettingsScreen} />
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
    backgroundColor:'#f0f0f0',


  },
  text:{
    fontSize:20,
    color:'#333',
    fontWeight:'bold',
    padding:10,
    margin:10,
    backgroundColor:'#fff',
    borderRadius:10,
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:2,
    elevation:2
  },
})