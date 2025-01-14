import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Animated,{useSharedValue,useAnimatedStyle,withSpring}from 'react-native-reanimated'

const AnimatedCardFlip = () => {
    const flip=useSharedValue(0)
    const frontImage=require('../Images/front.jpg')
    const backImage=require('../Images/back.jpg')
    const animatedStyleFront=useAnimatedStyle(()=>{
        return {
            transform:[{
                perspective:1000},
                {rotateY:`${flip.value}deg`}
            
            ],
            opacity:flip.value<90?1:0,

             }
    })
    const animatedStyleBack=useAnimatedStyle(()=>{
        return {
            transform:[{
                perspective:1000},
                {rotateY:`${flip.value+180}deg`}
            
            ],
            opacity:flip.value>=90?1:0,

             }
    })
    const handleFlip=()=>{
        flip.value=withSpring(flip.value===0?180:0)
    }
  return (
    <View className='flex-1 justify-center items-center bg-gray-900'>
     <View className='w-16 h-64 relative '>
        <Animated.View
         style={animatedStyleFront}
         className={'absolute top-0 w-full h-full bg-white rounded-lg shadow-lg justify-center'}
         >
         <Image
         source={frontImage}
         className='w-full h-full object-cover rounded-lg '
         resizeMode='cover'
         />
         <Text className='text-center text-lg font-bold mt-3 text-gray-800'>Product Title - Item front</Text>
         <Text className='text-center text-lg font-bold mt-3 text-gray-800'>This is front side</Text>
        </Animated.View>
        <Animated.View
        style={animatedStyleBack}
        className={'absolute top-0 w-full h-full bg-white rounded-lg shadow-lg justify-center'}
        >
        <Image
        source={backImage}
        className='w-full h-full object-cover rounded-lg'
        resizeMode='cover'
        />
        
        <Text className='text-center text-lg font-bold mt-3 text-gray-800'>Product Title - Item back</Text>
        <Text className='text-center text-lg font-bold mt-3 text-gray-800'>This is back side</Text>
           
        </Animated.View>
     </View>
     <TouchableOpacity onPress={handleFlip} className='bg-indigo-500 py-3 rounded-lg mt-8 px-4'>
        <Text className='text-center text-white text-lg font-semibold '>Flip</Text>
     </TouchableOpacity>
    </View>
  )
}

export default AnimatedCardFlip