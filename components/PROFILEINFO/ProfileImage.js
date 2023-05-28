import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ProfileImage = () => {
  return (
    <View style={{marginVertical:'10%', borderRadius:80 ,width:120, height:120,backgroundColor:'white',padding:0}}>
      <Image source={require('../../assets/amandp.jpg')} style={{width:'100%', height:'100%', borderRadius:80}}/>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({})