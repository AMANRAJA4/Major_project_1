import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../../BackButton'

const ProfileHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <Text style={styles.title}>Profile</Text>
    </View>
  )
}

export default ProfileHeader

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
})