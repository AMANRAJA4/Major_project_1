import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'

const OTPTitle = ({navigation}) => {
    return (
        <View style={{
            width: '100%',
            alignItems: 'center',
            marginTop: '10%',
            marginBottom: '5%',
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>

            <View style={{ width: '90%' , alignItems:'center'}}>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontWeight: '600',
                }}>Verifying your number</Text>
            </View>

            <View style={{ width: '10%' }}>
                <TouchableOpacity style={{ width:20}} onPress={()=> navigation.navigate('ProfileInfo')}> 
                <Image source={require('../../assets/menu.png')} style={{ width: 20, height: 20}} />
                </TouchableOpacity>
            </View>
                    
             
        
        </View>
    )
}

export default OTPTitle

const styles = StyleSheet.create({})