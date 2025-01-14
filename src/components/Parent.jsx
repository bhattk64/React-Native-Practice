import { View } from 'react-native'
import React, { createContext, useState } from 'react'
import FirstChild from './FirstChild'

//create,provide,use
export const counterContext=createContext()
const Parent = () => {
    const[count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1)
    }
  return (
   <counterContext.Provider value={{count,incrementCount}}>
     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <FirstChild/>
    </View>
   </counterContext.Provider>
  )
}

export default Parent