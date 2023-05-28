import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/PRIVACY/Title'
import Info from '../components/PRIVACY/Info'
import AgreeContinue from '../components/PRIVACY/AgreeContinue'
import Language from '../components/PRIVACY/Language'

const PRIVACY = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#03232e', flex:1, alignItems:'center'}}>
        <Title/>
        <Info/>
        <AgreeContinue navigation={navigation}/>
        <Language/>
    </View>
  )
}

export default PRIVACY

const styles = StyleSheet.create({})