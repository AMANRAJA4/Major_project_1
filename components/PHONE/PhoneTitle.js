import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PhoneTitle = () => {
  return (
    <View style={{ alignItems: 'center',marginTop:'10%', marginBottom:'5%' }}>
      <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600'
            }}>Enter your phone number</Text>
    </View>
  )
}

export default PhoneTitle

const styles = StyleSheet.create({})