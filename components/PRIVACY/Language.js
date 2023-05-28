import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";

const Language = () => {

    const refRBSheet = useRef();

    return (
        <View >
            <TouchableOpacity style={{
                backgroundColor: '#0cb9f3',
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 30,
                elevation: 5,
                shadowColor: 'black',
                flexDirection: 'row',
                alignItems: 'center',
                width: 150,
                justifyContent: 'space-around'
            }}
                onPress={() => refRBSheet.current.open()}>
                <Image
                    source={require('../../assets/globe.png')}
                    style={{ width: 20, height: 20 }}
                />
                <Text>Language</Text>
                <Image
                    source={require('../../assets/down-arrow.png')}
                    style={{ width: 20, height: 20 }}
                />
            </TouchableOpacity>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent"
                    },
                    draggableIcon: {
                        backgroundColor: "black"
                    },
                    container:{
                        height:400,
                        backgroundColor:'white',
                        borderRadius:20,
                        minClosingHeight:400
                    }
                }}
            >
                <View style={{paddingLeft:50}}>
                    <Text style={{fontSize:18,fontWeight:'600'}}>App Language</Text>
              
                </View>
            </RBSheet>
        </View>
    )
}

export default Language

const styles = StyleSheet.create({})