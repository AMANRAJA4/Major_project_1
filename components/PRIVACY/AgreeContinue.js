import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const AgreeContinue = ({navigation}) => {
  return (
    <View style={{marginTop:'20%', marginBottom:'10%'}}>
      <TouchableOpacity 
        style={{
            backgroundColor:'#0cb9f3', 
            borderRadius:30,
            paddingVertical:10,
            paddingHorizontal:50,
            alignItems:'center',
            elevation:5,
            shadowColor:'black'
            }}

            onPress={()=> navigation.navigate('Phone')}
        >
        <Text style={{fontWeight:'500'}}>Agree and continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AgreeContinue

const styles = StyleSheet.create({})