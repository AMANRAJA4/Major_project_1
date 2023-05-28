import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OTPTitle from '../components/VERIFYOTP/OTPTitle'
import OTPInfo from '../components/VERIFYOTP/OTPInfo'
import OTPInput from '../components/VERIFYOTP/OTPInput'

const VERIFYOTP = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#03232e', flex:1, alignItems:'center'}}>
      <OTPTitle navigation={navigation}/>
      <OTPInfo navigation={navigation}/>
      <OTPInput/>
    </View>
  )
}

export default VERIFYOTP

const styles = StyleSheet.create({})