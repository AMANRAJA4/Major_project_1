import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {collection,addDoc} from "firebase/firestore";
import { db } from './firebase';


/* SignOut Screens */
import PRIVACY from './screens/PRIVACY';
import PHONE from './screens/PHONE';
import VERIFYOTP from './screens/VERIFYOTP';
import PROFILEINFO from './screens/PROFILEINFO';

/* SignIn Screens */

import CHAT from './screens/CHAT';
import STATUS from './screens/STATUS';
import GROUP from './screens/GROUP';
import CALL from './screens/CALL';

import CHATTING from '././screens/chatscreens/CHATTING'
import CHATTINGINFO from '././screens/chatscreens/CHATTINGINFO'

import SETTING from '././screens/settingscreens/SETTING'

export default function App({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#03232e' }}>
      <StatusBar style='light' />

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Privacy' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Privacy' component={PRIVACY} navigation={navigation}/>
          <Stack.Screen name='Phone' component={PHONE} navigation={navigation}/>
          <Stack.Screen name='OTP' component={VERIFYOTP} navigation={navigation}/>
          <Stack.Screen name='ProfileInfo' component={PROFILEINFO} navigation={navigation}/>

          <Stack.Screen name='Group' component={GROUP} navigation={navigation}/>
          <Stack.Screen name='Chat' component={CHAT} navigation={navigation}/>
          <Stack.Screen name='Status' component={STATUS} navigation={navigation}/>
          <Stack.Screen name='Call' component={CALL} navigation={navigation}/>

          <Stack.Screen name='Chatting' component={CHATTING} navigation={navigation}/>
          <Stack.Screen name='ChattingInfo' component={CHATTINGINFO} navigation={navigation}/>
          <Stack.Screen name='Setting' component={SETTING} navigation={navigation}/>
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

