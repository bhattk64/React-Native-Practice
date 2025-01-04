import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, { useState } from 'react'


const ModalDialougeBox = () => {
    const[modalVisible,setModalVisible]=useState(false)

  return (
    <View style={styles.container}>
     <TouchableOpacity
     style={styles.openButton}
     onPress={()=>setModalVisible(true)}>
        <Text style={styles.buttonText}> Show Modal </Text>
     </TouchableOpacity>
     <Modal visible={modalVisible} animationType='fade' transparent={true} onRequestClose={()=>setModalVisible(false)}>
        <View style={styles.modalOveraLay}>
            <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Beautiful Modal</Text>
                <Text style={styles.modalText}> This is Beautiful Modal</Text>
                <TouchableOpacity style={styles.closeButton} onPress={()=>setModalVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
     </Modal>
    </View>
  )
}

export default ModalDialougeBox

const styles=StyleSheet.create({
   container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',

   },
   openButton:{
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width:200,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    margin:10

   },
   modalOveraLay:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0,0.5)',

   },
   modalView:{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:'80%',
    padding:20,
    alignItems:'center',
    elevation:5
   
   },
   modalTitle:{
    fontSize: 22,
    marginBottom: 10,
    textAlign:'center',
    fontWeight:'bold',
    color:'#333'

   },
   modalText:{
    marginBottom:15,
    color:'#555555',
    fontSize:16

   },
   closeButton:{
    backgroundColor:'#FF0000',
    borderRadius: 30,
    padding: 9,
    elevation: 4,
    width:150,
    height:50,

   },
   closeButtonText:{
    fontSize:22,
    textAlign:'center',
    fontWeight:'bold'

    
   },
   buttonText:{
    fontSize:16,
    color:'#333',
    fontWeight:'bold',
    textAlign:'center',
    
   }

})