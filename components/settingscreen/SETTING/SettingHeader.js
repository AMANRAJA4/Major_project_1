import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from '../../BackButton'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SettingHeader = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <BackButton navigation={navigation} />
            <View style={styles.position}>
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity  style={{padding:4}}>
            <Icon name="magnify" color={'white'} size={25}/>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default SettingHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#03232e',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        paddingLeft: 30,
    },
    position:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        flex:1
    }
})