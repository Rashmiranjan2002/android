import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { create } from 'react-test-renderer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import splash from './Splash';
import Home from'./Home';
import Appointmentbook from './Appointmentbook';
import Success from './Success';


const Stack=createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen component={splash} name='Splash' options={{headerShown:false}}/> 
         
            <Stack.Screen component={Home} name='Home' options={{headerShown:false}}/> 
            <Stack.Screen component={Appointmentbook} name='Appointmentbook' options={{headerShown:false}}/> 
            <Stack.Screen component={Success} name='Success' options={{headerShown:false}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;