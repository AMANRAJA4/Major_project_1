import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OTPInfo = ({ navigation }) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 13,
          marginHorizontal: '9%',
          color: 'white'
        }}>Waiting to automatically detect an SMS sent to
        <Text style={{ fontWeight: '700' }}>  +91 7970656807.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Phone')}><Text style={{ color: '#7dafff' }}> Wrong number ?</Text></TouchableOpacity>
      </Text>

    </View>
  )
}

export default OTPInfo

const styles = StyleSheet.create({})