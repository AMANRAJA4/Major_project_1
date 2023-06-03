import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ProfileList = () => {
    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: "center", width: '85%' }}>
                    <Image source={require('../../../assets/amandp.jpg')} style={{ width: 70, height: 70, borderRadius: 50, marginRight: 10 }} />
                    <View>
                        <Text style={styles.name}>Aman</Text>
                        <Text style={styles.bio}>I am busy...</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '15%', height: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <Icon name='qrcode' color={'#03232e'} size={30} />
                </TouchableOpacity>
            </View>
            <Divider width={1} orientation='vertical'/>
        </>
    )
}

export default ProfileList

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
    },
    name: {
        fontSize: 20,
    },
    bio: {
        fontSize: 14,
        marginTop:5,
        color:'gray'
    }
})