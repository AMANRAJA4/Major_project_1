import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MessageIcon = () => {
    return (
        <TouchableOpacity style={styles.con}>
            <Image source={require('../../assets/comment.png')} style={{width:20,height:20}}/>
        </TouchableOpacity>
    )
}

export default MessageIcon

const styles = StyleSheet.create({
    con: {
        borderRadius: 30,
        backgroundColor: '#03232e',
        padding: 20,
        width:50,
        height:50,
        alignItems:'center',
        elevation:20,
        shadowColor:'black'
    }
})