import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabBar = ({ navigation }) => {
    return (
        <View style={{ width: '100%', backgroundColor: '#03232e', flexDirection: 'row' }}>

            <TouchableOpacity style={styles.TabIcon} onPress={() => navigation.navigate('Chat')}>
                <Icon name="account-group" color={'white'} size={20} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Chat')}>
                <Text style={styles.text}>Chats</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Status')}>
                <Text style={styles.text}>Status</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TabBtn} onPress={() => navigation.navigate('Call')}>
                <Text style={styles.text}>Calls</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TabBar

const styles = StyleSheet.create({
    TabIcon: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '16%',
        paddingVertical:12
    },
    TabBtn: {
        paddingVertical: 5,
        width: '28%',
        paddingVertical:12
    },
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    }
})