import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/CHAT/Header'
import TabBar from '../components/CHAT/TabBar'

import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

const STATUS = ({ navigation }) => {
  return (
    <View>
      <Header />
      <TabBar navigation={navigation} />
      <View>
        <MenuProvider>
          <Menu>
            <MenuTrigger text='Select action' />
            <MenuOptions>
              <MenuOption onSelect={() => alert(`Save`)} text='Save' />
              <MenuOption onSelect={() => alert(`Delete`)} >
                <Text style={{ color: 'red' }}>Delete</Text>
              </MenuOption>
              <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    </View>
  )
}

export default STATUS

const styles = StyleSheet.create({})