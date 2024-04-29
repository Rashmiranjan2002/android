import { View, Text ,StyleSheet, Image} from 'react-native'
import React from 'react'
import react,{useEffect}from 'react';


const Splash = ({navigation}) => {
  useEffect(()=>{
    setTimeout(() => {  
      navigation.navigate('Home');
      
    },3000)
  },[])
  return (
    <View style={Style.container}>
      <Image source={require('./images/logo1.png')}style={Style.logo}/>
      <Text styles={Style.Text}>Doctor Appointment</Text>
    </View>
  )
}

export default Splash;
const Style=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
    },
    logo:{
      
        width:100,
        height:100,
tintColor:'white',
    },
    Text:
    {color:'white',
    marginTop:30,
    fontSize:30,
    fontWeight:'700',
    objectFit:'fill',
     },
   
});