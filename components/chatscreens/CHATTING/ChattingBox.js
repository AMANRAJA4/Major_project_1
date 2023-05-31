import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
/*import { Camera } from 'expo-camera';*/

const ChattingBox = () => {
  return (
    <View style={styles.container}>

      <View style={styles.inputCss}>
        <TouchableOpacity style={styles.inputIcon}><Icon name='emoticon-outline' color={'gray'} size={25}/></TouchableOpacity>
        <TextInput 
          placeholder='Message'
          placeholderTextColor={'gray'}

          style={styles.inputBox}
        />
        <TouchableOpacity style={styles.inputIcon}><Icon name='attachment' color={'gray'} size={25}/></TouchableOpacity>
        <TouchableOpacity style={styles.inputIcon}><Icon name='camera' color={'gray'} size={25}/></TouchableOpacity>
      </View>

      <View style={styles.micBox}>
      <TouchableOpacity style={styles.micIcon}><Icon name='microphone' color={'white'} size={25}/></TouchableOpacity>
      </View>

    </View>
  )
}

export default ChattingBox

const styles = StyleSheet.create({
  container:{
    paddingVertical:8,
    paddingHorizontal:10,
    flexDirection:'row',

  },
  inputCss:{
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    width:'85%',
    backgroundColor:'white',
    borderRadius:25,
    marginRight:5,
    elevation:5,
    shadowColor:'black'
},
  inputIcon:{
    padding:7,
    marginHorizontal:1,
    borderRadius:25
  },
  inputBox:{
    width:'55%'
  },
  micBox:{
    width:'15%'
  },
  micIcon:{
    flexDirection:'row',
    justifyContent:'center',
    height:50,
    alignItems:'center',
    borderRadius:25,
    backgroundColor:'#03232e',
    elevation:5,
    shadowColor:'gray'
  }
})