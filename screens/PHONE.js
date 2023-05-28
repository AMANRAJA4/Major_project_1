import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PhoneTitle from '../components/PHONE/PhoneTitle'
import PhoneInfo from '../components/PHONE/PhoneInfo'
import PhoneInput from '../components/PHONE/PhoneInput'
import NextBtn from '../components/PHONE/NextBtn'

const PHONE = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#03232e', flex:1, alignItems:'center'}}>
      <PhoneTitle/>
      <PhoneInfo/>
      <PhoneInput/>
      <NextBtn navigation={navigation}/>
    </View>
  )
}

export default PHONE

const styles = StyleSheet.create({})