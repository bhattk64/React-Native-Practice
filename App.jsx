// import React from 'react'
// // import {Text,View,Button}from 'react-native'
// // import First from './src/components/First'
// import {View} from 'react-native'
// // import Search from './src/components/Search'
// // import PlatformExample from './src/components/PlatformExample'
// // import GET_API_LIST from './src/components/GET_API_LIST'
// // import Patch_API from './src/components/Patch_API'
// // import Delete_API from './src/components/Delete_API'
// // import Put_API from './src/components/Put_API'
// // import Post_API from './src/components/Post_API'
// // import AlertExample from './src/components/AlertExample'
// // import GET_API from './src/components/GET_API'
// // import ModalDialougeBox from './src/components/ModalDialougeBox'
// // import UseRefHook from './src/components/UseRefHook'
// // import StatusBarExample from './src/components/StatusBarExample'
// // import PreesableComponents from './src/components/PreesableComponents'
// // import Loader from './src/components/Loader'
// // import StyleWithButton from './src/components/StyleWithButton'
// // import HideShowToggle from './src/components/HideShowToggle'
// // import UseEffectHookUnmountingPhase from './src/components/UseEffectHookUnmountingPhase'
// // import UseEffectHookUpdatingPhase from './src/components/UseEffectHookUpdatingPhase'
// // import UseEffectHook from './src/components/UseEffectHook'
// // import ClassComponenets from './src/components/ClassComponenets'
// // import Grid from './src/components/Grid'
// // import LoginForm from './src/components/LoginForm'
// // import ContactListScreen from './src/screens/Contact/ContactListScreen'
// // import FlatListScreen from './src/components/FlatListScreen'
// // import SectionListScreen from './src/components/SectionListScreen'
// // import InputText from './src/components/InputText'
// // import Styling from './src/components/Styling'
// // import JSX from './src/components/JSX'
// // import OnClick from './src/components/OnClick'
// // import UseStateHooks from './src/components/UseStateHooks'
// // import Props from './src/components/Props'


// const App = () => {
//   return (
//     <View style={{flex:1}}>
//    {/* <Text style={{fontSize:30}}>React native mobile app developer</Text>
//    <Text style={{fontSize:30}}>React native mobile app </Text>
//    <Button title='Press Here' />
//    <First/> */}
//    {/* <JSX/> */}
//     {/* <OnClick/> */}
//     {/* <UseStateHooks/> */}
//     {/* <Props/> */}
//     {/* <InputText/> */}
//     {/* <Styling/> */}
//     {/* <FlatListScreen/> */}
//     {/* <SectionListScreen/> */}
//     {/* <LoginForm/> */}
//     {/* <ContactListScreen/> */}
//     {/* <Grid/> */}
//      {/* <ClassComponenets/> */}
//      {/* <UseEffectHook/> */}
//      {/* <UseEffectHookUpdatingPhase/> */}
//      {/* <UseEffectHookUnmountingPhase/> */}
//      {/* <HideShowToggle/> */}
//      {/* <StyleWithButton/> */}
//      {/* <Loader/> */}
//      {/* <PreesableComponents/> */}
//      {/* <StatusBarExample/> */}
//      {/* <UseRefHook/> */}
//      {/* <ModalDialougeBox/> */}
//      {/* <AlertExample/> */}
//      {/* <GET_API/> */}
//      {/* <Post_API/> */}
//      {/* <Put_API/> */}
//      {/* <Patch_API/> */}
//      {/* <Delete_API/> */}
//      {/* <GET_API_LIST/> */}
//      {/* <PlatformExample/> */}
//      {/* <Search/> */}
//     </View>
     
    
//   )
// }
// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import React from 'react'
// import Home from './src/navigations-screens/Home'
// import About from './src/navigations-screens/About'
// import Login from './src/navigations-screens/Login'
// import { Button, StyleSheet } from 'react-native'
// import MyHeader from './src/navigations-screens/MyHeader'
// import Example from './src/navigations-screens/Example'

// const Stack=createNativeStackNavigator()
// const say=()=>{
//   Alert.alert('Hello ','Hello Guys')
// }
// // const HeaderTitle=()=> <Button  title='One' color= 'red' onPress={say}/>
// // const HeaderRight=()=><Button title='Two' color='green'  onPress={say}/>
// const  example=()=><Example/>
// const App = () => {
//   return (
//    <NavigationContainer>
// <Stack.Navigator screenOptions={{
//   headerStyle:styles.header,
//   headerTitleStyle:styles.headerTitlle,
//   headerTintColor:'#fff',
//   contentStyle:styles.screen
// }}>
//   <Stack.Screen name='Header' component={MyHeader }
//   options={{
//     title:'',
//     // headerTitle:()=> <Button  title='One' color= 'red'/>,
//     // headerRight:()=> <Button title='Two' color='green' />
//     // headerTitle:HeaderTitle,
//     // headerRight:HeaderRight 
//     headerTitle:example
//   }}
//   />
//   <Stack.Screen name='Login' component={Login}
//   // options={{
//   //   title:'Login Page',
//   //   headerTintColor:'red',
//   //   headerTitleStyle:{
//   //     color:'blue',
//   //     fontSize:30

//   //   },
//   //   headerStyle:{
//   //     backgroundColor:' red'
//   //   },
//   // }}
//   />
//     <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
//     <Stack.Screen name='About'component={About} />
// </Stack.Navigator>
//    </NavigationContainer>
//   )
// }

// export default App


// const styles=StyleSheet.create({
//   header:{
//     backgroundColor:'red',
//     height:50,
    

//   },
//   headerTitlle:{
//     color:'blue',
//     fontSize:30,
//     fontWeight:'bold'
//   },
//   screen:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'lightgreen'
//   }
// })
import 'react-native-gesture-handler'
import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


const Drawer=createDrawerNavigator() 
const HomeScreen=({navigation})=>(
  <View style={styles.screenContainer}>
    <Text  style={styles.title}>Home Screen</Text>
    <Button title='Open Drawer' onPress={()=>navigation.openDrawer()} />
  </View>
)
const ProfileScreen=({navigation})=>(
  <View style={styles.screenContainer}>
    <Text style={styles.title}>About Screen</Text>
    <Button title='Open Drawer' onPress={()=>navigation.openDrawer()} />

  </View>
)
const SettingScreen=({navigation})=>(
  <View style={styles.screenContainer}>
    <Text style={styles.title}>Home Screen</Text>
    <Button title='Open Drawer' onPress={()=>navigation.openDrawer()} />
  </View>
)
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor:'lightblue',
          width:200

        },
        drawerLabelStyle:{
          color:'black',
          fontSize:20
        },
        headerStyle:{
          backgroundColor:'red'

        },
        headerTintColor:'#fff',
        headerTitleAlign:'center'
      }}
      
      >
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={ProfileScreen} />
        <Drawer.Screen name='Settings' component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
const styles=StyleSheet.create({
  screenContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f0f0f0'

  },
  title:{
    fontSize:30,
    color:'#333',
    marginBottom:20,
    fontWeight:'bold'

  },
})