import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

const OTPInput = () => {
  return (
    <View style={{marginTop:'20%', marginBottom:'10%'}}>
      <TextInput 
        placeholder='-     -     -     -     -     -'
        placeholderTextColor={'white'}
        keyboardType='numeric'
        maxLength={6}
        
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

        <Text style={{textAlign:'center',  color:'white', marginTop:30}}>Enter 6-digit code</Text>
        <TouchableOpacity style={{marginTop:10}}>
            <Text style={{textAlign:'center',color:'white', fontWeight:'700'}}>Didn't recieve code?</Text>
        </TouchableOpacity>

    </View>
  )
}

export default OTPInput

const styles = StyleSheet.create({})