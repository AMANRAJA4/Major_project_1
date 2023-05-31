import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import Header from '../components/CHAT/Header'
import TabBar from '../components/CHAT/TabBar'
import ChatList from '../components/CHAT/ChatList'
import MessageIcon from '../components/CHAT/MessageIcon';

const CHAT = ({ navigation }) => {
  return (
    <View>

      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} >
        <Header navigation={navigation}/>
        <TabBar navigation={navigation} />
        <Divider width={1} orientation="vertical" />

        <ChatList navigation={navigation} />
      </ScrollView>
      <View style={styles.icon}>
        <MessageIcon />
      </View>


    </View>
  )
}

export default CHAT

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  }
})