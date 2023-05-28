import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import PRIVACY from './screens/PRIVACY';
import PHONE from './screens/PHONE';
import VERIFYOTP from './screens/VERIFYOTP';

import CHAT from './screens/CHAT';
import PROFILEINFO from './screens/PROFILEINFO';

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
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}

