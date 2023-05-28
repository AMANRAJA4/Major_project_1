import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileTile from '../components/PROFILEINFO/ProfileTile'
import ProfileImage from '../components/PROFILEINFO/ProfileImage'
import ProfileName from '../components/PROFILEINFO/ProfileName'
import ProfileNext from '../components/PROFILEINFO/ProfileNext'
const PROFILEINFO = () => {
  return (
    <View style={{backgroundColor:'#03232e', flex:1, alignItems:'center'}}>
      <ProfileTile/>
      <ProfileImage/>
      <ProfileName/>
      <ProfileNext/>
    </View>
  )
}

export default PROFILEINFO

const styles = StyleSheet.create({})