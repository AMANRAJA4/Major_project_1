import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ImageProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/amandp.jpg')} style={styles.image}/>
      <TouchableOpacity style={styles.editImage}>
        <Icon name="camera" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default ImageProfile

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:25,
       
    },
    image:{
        width:150,
        height:150,
        borderRadius:100
    },
    editImage:{
        backgroundColor:'#03232e',
        padding:10,
        borderRadius:25,
        position:'absolute',
        bottom:35,
        right:90,
    }
})