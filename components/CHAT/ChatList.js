import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const chats = [
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman raja',
        activity: 'Yesterday',
        lastchat: 'yes i will do.',
    },
    {
        dp: require('../../assets/amandp.jpg'),
        name: 'Aman',
        activity: '30/05/2023',
        lastchat: 'Good night ',
    },
]
const ChatList = ({navigation}) => {
    return (
        <>
            {chats.map((chat, index) => (
                <View key={index}>
                    <View style={styles.chatContainer}>
                        <TouchableOpacity style={{ width: 60 }} onPress={()=>{navigation.navigate('')}}>
                            <Image style={styles.dpImage}
                                source={chat.dp}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '80%',paddingLeft:10,height:50}} onPress={()=>{navigation.navigate('Chatting')}}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={styles.name}>{chat.name}</Text>
                                <Text style={styles.activity}>{chat.activity}</Text>
                            </View>
                            <Text style={styles.lastChat}>{chat.lastchat}</Text>
                        </TouchableOpacity>
                    </View>
                    <Divider width={1} orientation="vertical" />
                </View>
            ))}
        </>
    )
}

export default ChatList

const styles = StyleSheet.create({
    chatContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dpImage: {
        width: 50,
        height: 50,
        borderRadius: 80
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: '600'
    },
    activity: {
        fontSize: 12,
        color: 'gray'
    },
    lastChat: {
        color: 'gray'
    }
})