import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProfileHeader from '../../components/settingscreen/PROFILE/ProfileHeader'
import ImageProfile from '../../components/settingscreen/PROFILE/ImageProfile'
import ProfileInfo from '../../components/settingscreen/PROFILE/ProfileInfo'

const PROFILE = ({navigation}) => {
  return (
    <View>
      <ProfileHeader navigation={navigation} />
      <ImageProfile/>
      <ProfileInfo/>
    </View>
  )
}

export default PROFILE

const styles = StyleSheet.create({})