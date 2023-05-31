import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MessageIcon = () => {
    return (
        <TouchableOpacity style={styles.con}>
            <Icon name="message-text" color={'white'} size={20} />
        </TouchableOpacity>
    )
}

export default MessageIcon

const styles = StyleSheet.create({
    con: {
        borderRadius: 25,
        backgroundColor: '#03232e',
        width:50,
        height:50,
        alignItems:'center',
        elevation:20,
        shadowColor:'black',
        flexDirection:'row',
        justifyContent:'center',
    }
})