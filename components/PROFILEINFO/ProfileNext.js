import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileNext = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor:'#0cb9f3', 
          borderRadius:30,
          paddingVertical:10,
          paddingHorizontal:30,
          alignItems:'center',
          elevation:5,
          shadowColor:'black'
          }}

          onPress={()=> navigation.navigate('Chat')}
      >
      
      <Text style={{fontWeight:'500'}}>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileNext

const styles = StyleSheet.create({})