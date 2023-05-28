import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{backgroundColor:'#03232e',flexDirection:'row', justifyContent:'space-between',paddingHorizontal:20,paddingVertical:20}}>
      <View>
        <Text style={{color:'white',fontSize:20,fontWeight:'700'}}>UnknownChat</Text>
      </View>

      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity style={{marginHorizontal:10}}>
            <Image source={require('../../assets/camera.png')} style={{width:20,height:20}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:10}}>
            <Image source={require('../../assets/magnifying-glass.png')} style={{width:20,height:20}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal:10}}>
            <Image source={require('../../assets/menu.png')} style={{width:10,height:20}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})