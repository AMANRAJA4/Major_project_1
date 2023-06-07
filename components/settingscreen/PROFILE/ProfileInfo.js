import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider } from 'react-native-elements'

const ProfileInfo = () => {
    return (
        <View style={styles.container}>

            <>
                <View style={styles.listContainer}>
                    <Icon name="account" size={25} color={'#03232e'} style={styles.iconDiv} />
                    <TouchableOpacity style={styles.editDiv}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>Name</Text>
                            <Icon name="pencil" size={20} color={'#03232e'} />
                        </View>
                        <Text style={styles.text}>Aman</Text>
                        <Divider width={1} orientation='vertical' style={{marginTop:20}}/>
                    </TouchableOpacity>
                </View>
                
            </>

            <View style={styles.listContainer}>
                <Icon name="information-outline" size={25} color={'#03232e'} style={styles.iconDiv}/>
                <TouchableOpacity style={styles.editDiv}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.title}>About</Text>
                        <Icon name="pencil" size={20} color={'#03232e'} />
                    </View>
                    <Text style={styles.text}>I am busy</Text>
                    <Divider width={1} orientation='vertical' style={{marginTop:20}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.listContainer}>
                <Icon name="phone" size={20} color={'#03232e'} style={styles.iconDiv}/>
                <TouchableOpacity style={styles.editDiv}>
                    <Text style={styles.title}>Phone</Text>
                    <Text style={styles.text}>+91 9155244224</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default ProfileInfo

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    listContainer: {
        flexDirection: 'row',
        paddingVertical: 15,
        width: '100%',
    },
    iconDiv: {
        width: '15%',
       
    },
    editDiv: {
        width: '85%',
       
    },
    title: {
        fontSize: 14,
        color: 'gray'
    },
    text: {
        fontWeight:'500'
    }
})