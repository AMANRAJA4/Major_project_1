import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Info = () => {
    return (
        <View>
            <Text style=
                {{ 
                    textAlign: 'center', 
                    fontSize: 13, 
                    marginHorizontal: '10%',
                    color:'white',                   
                }}>Read our Privacy Policy. Tap "Agree and continue" to accept the Terms of Services.
            </Text>
        </View>
    )
}

export default Info

const styles = StyleSheet.create({})