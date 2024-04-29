import { View, Text,StyleSheet, TouchableOpacity ,Image} from 'react-native'
import React from 'react'

const Header = ({title,icon}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backbtn}>
        <Image source={icon} style={styles.back}/>
      </TouchableOpacity>
      <Text style={[styles.title,{marginLeft:20}]}>{title}</Text>
    </View>
  )
}

export default Header;
const styles=StyleSheet.create({
    header:{
        height:60,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        elevation:5,
        paddingLeft:20,

    },
    back:{
      width:24,
      height:24,
      marginLeft:10,
    
    },
    backbtn:{
      height:30,
      width:30,
      borderRadius:15,
    },
    title:{
      marginLeft:20,
      fontSize:16,
      fontWeight:'600',
    }
});