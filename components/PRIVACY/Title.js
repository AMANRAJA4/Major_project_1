import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
    return (
        <View style={{ alignItems: 'center',marginTop:'10%', marginBottom:'5%' }}>
            <Text style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '600'
            }}>Welcome to UnknownChat</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({})