import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SettingHeader from '../../components/settingscreen/SETTING/SettingHeader'
import ProfileList from '../../components/settingscreen/SETTING/ProfileList'
import SettingList from '../../components/settingscreen/SETTING/SettingList'
import ChatList from '../../components/CHAT/ChatList'

const SETTING = ({ navigation }) => {
  return (
    <>
      <SettingHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={true} scroll>
      <ProfileList />
        <SettingList/>
      </ScrollView>
    </>
  )
}

export default SETTING

const styles = StyleSheet.create({})