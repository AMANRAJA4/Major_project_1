import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SettingList = () => {
    return (
        <View style={{backgroundColor:'white'}}>
            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='key-variant' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='lock' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Privacy</Text>
                    <Text style={styles.text}>Block contacts, disappearing messages</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='message-text' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Chats</Text>
                    <Text style={styles.text}>Theme, wallpapers, chat history</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='bell' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Notification</Text>
                    <Text style={styles.text}>Message, group & call tones</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='database' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Storage</Text>
                    <Text style={styles.text}>Network usage, auto download</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='web' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>App language</Text>
                    <Text style={styles.text}>Default English</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='help' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Help</Text>
                    <Text style={styles.text}>Help center, contact us, privacy policy</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='account-multiple-plus' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Invite a friend</Text>
                </TouchableOpacity>
            </View>
                              
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', paddingVertical:50}}>
                <View style={{alignItems:'center'}}>
                <Icon name='heart-broken' color={'#03232e'} size={20}/>
                <Text>Talk Unknown</Text>
                </View>
            </View>
        </View>
    )
}

export default SettingList

const styles = StyleSheet.create({
    list:{
        paddingVertical:10,
        width: '100%', 
        flexDirection: 'row',
        height:80,
        alignItems:'center'
    },
    Icon:{
        width: '20%',

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize: 16,
    },
    text:{
        fontSize: 13,
        color:'gray'
    }
})