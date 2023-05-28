import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'

const ProfileName = () => {
  return (
    <View style={{marginBottom:'10%'}}>
      <TextInput 
        placeholder='Type your name here'
        placeholderTextColor={'white'}
        keyboardType='default'
        maxLength={10}
        autoCapitalize={'words'}
        keyboardAppearance='dark'
        
        style={{
          backgroundColor:'#03232e',
          paddingHorizontal:20,
          paddingVertical:5,
          width:200,
          textAlign:'center',
          borderBottomColor:'#0cb9f3',
          borderBottomWidth:3,
          color:'white',
          fontSize:15
        }}
        />
    </View>
  )
}

export default ProfileName

const styles = StyleSheet.create({})