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
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='message-text' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='bell' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='database' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='web' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='help' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.list}>
                <View style={styles.Icon}>
                    <Icon name='account-multiple-plus' color={'#03232e'} size={25} />
                </View>
                <TouchableOpacity style={{ width: '80%',paddingRight:100,}}>
                    <Text style={styles.title}>Account</Text>
                    <Text style={styles.text}>Security notification, change numbe </Text>
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