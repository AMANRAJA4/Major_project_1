import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ChattingHeader from '../../components/chatscreens/CHATTING/ChattingHeader'
import Messages from '../../components/chatscreens/CHATTING/Messages'
import ChattingBox from '../../components/chatscreens/CHATTING/ChattingBox'

const CHATTING = ({navigation}) => {
  return (
    <>
      <ChattingHeader navigation={navigation}/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.mess}>
        <Messages/>
      </ScrollView>
      <ChattingBox/>
    </>
  )
}

export default CHATTING

const styles = StyleSheet.create({
})