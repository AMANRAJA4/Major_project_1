import { StyleSheet, Text, View , TextInput} from 'react-native'
import React from 'react'

const PhoneInput = () => {
  return (
    <View style={{marginTop:'20%', marginBottom:'10%'}}>
      <TextInput 
        placeholder='+ 91  phone number'
        placeholderTextColor={'white'}
        keyboardType='number-pad'
        maxLength={10}
        
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

export default PhoneInput

const styles = StyleSheet.create({})