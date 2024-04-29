import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Button = ({ w, h, txt, onclick, status }) => {
  return (
    <TouchableOpacity onPress={() => {
      onclick();
    }} style={{ alignSelf: 'center', }}>
      {status ? (<LinearGradient colors={['#009FFD', '#2A2A72',]}
        style={{ width: w, height: h, justifycontent: 'center', allignItems: 'center', borderRadius: 10 }}>
        <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700' }}>{txt}</Text>
      </LinearGradient>) : (<LinearGradient colors={['#8e8e8e', '#8e8e8e',]} 
         style={{width:w,height:h,justifycontent:'center',allignItems:'center',borderRadius:10,opacity:.6}}>
            <Text style={{color:'#fff',fontSize:15,fontWeight:'700',}}>{txt}</Text>
         </LinearGradient>)}
     
    </TouchableOpacity>
  )
}

export default Button;