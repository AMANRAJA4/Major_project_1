import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ProfileTile = ({navigation}) => {
    return (
        <View>
            <View style={{
                width: '100%',
                alignItems: 'center',
                marginTop: '10%',
                marginBottom: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>

                <View style={{ width: '90%', alignItems: 'center' }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        fontWeight: '600',
                    }}>Profile info</Text>
                </View>

                <View style={{ width: '10%' }}>
                    <TouchableOpacity style={{ width: 20 }} onPress={() => navigation.navigate('Chat')}>
                        <Image source={require('../../assets/menu.png')} style={{ width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <Text style={{
                textAlign: 'center',
                fontSize: 13,
                marginHorizontal: '10%',
                color: 'white'
            }}>Please provide your name and an optional profile photo</Text>
        </View>
    )
}

export default ProfileTile

const styles = StyleSheet.create({})