import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/CHAT/Header'
import TabBar from '../components/CHAT/TabBar'

const STATUS = ({navigation}) => {
  return (
    <View>
      <Header/>
      <TabBar navigation={navigation}/>
      <Text>Status</Text>
    </View>
  )
}

export default STATUS

const styles = StyleSheet.create({})