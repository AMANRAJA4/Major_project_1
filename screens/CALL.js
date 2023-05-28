import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/CHAT/Header'
import TabBar from '../components/CHAT/TabBar'

const CALL = ({navigation}) => {
  return (
    <View>
      <Header/>
      <TabBar navigation={navigation}/>
      <Text>Call</Text>
    </View>
  )
}

export default CALL

const styles = StyleSheet.create({})