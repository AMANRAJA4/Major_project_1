import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/CHAT/Header'
import TabBar from '../components/CHAT/TabBar'

const CHAT = ({navigation}) => {
  return (
    <View>
      <Header/>
      <TabBar navigation={navigation}/>
      <ScrollView >

      </ScrollView>
    </View>
  )
}

export default CHAT

const styles = StyleSheet.create({})