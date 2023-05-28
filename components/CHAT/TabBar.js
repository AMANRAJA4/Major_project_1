import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TabBar = ({ navigation }) => {
    return (
        <View style={{ width: '100%', backgroundColor: '#03232e', flexDirection: 'row' }}>

            <View style={{ width: '16%' }}>
                <TouchableOpacity style={styles.TabIcon} onPress={() => navigation.navigate('Chat')}>
                    <Image source={require('../../assets/group.png')} style={{width:20,height:20}}/></TouchableOpacity>
            </View>

            <View style={{ width: '28%' }}>
                <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Chat')}><Text style={styles.text}>Chats</Text></TouchableOpacity>
            </View>

            <View style={{ width: '28%' }}>
                <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Status')}><Text style={styles.text}>Status</Text></TouchableOpacity>
            </View>

            <View style={{ width: '28%' }}>
                <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Call')}><Text style={styles.text}>Calls</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    TabIcon:{
        paddingVertical:10,
        flexDirection:'row',
        justifyContent:'center',
    },
    TabBtn:{
        paddingVertical:10,
    },
    text:{
        color:'white',
        fontSize:15,
        textAlign:'center'
    }
})