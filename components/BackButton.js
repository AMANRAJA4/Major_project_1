import { TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const BackButton = ({ navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.container}>
     <Icon name='arrow-left' color={'white'} size={25} />
    </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  container:{
    paddingTop:2,
    marginRight:5
  }
})