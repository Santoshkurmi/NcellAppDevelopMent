import 'react-native-gesture-handler';
import {NavigationContainer,AsyncStorage} from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View,Button, BackHandler } from 'react-native';
import Splash from './src/Splash';
import {createDrawerNavigator} from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import { setStatusBarHidden } from 'expo-status-bar';
import Welcome from './src/Welcome';
import LoginNcell from './src/Network';
import Transfer from './src/Transfer';
import DrawerHome from './src/Drawer';

const Stack=createStackNavigator();
const Drawer = createDrawerNavigator();

const App=()=>{

//hellp

return(
<NavigationContainer>


<Stack.Navigator >
<Stack.Screen options={{headerShown:false}} name='Home' component={Splash}></Stack.Screen>
<Stack.Screen options={{headerShown:false}} name='Login' component={Login}></Stack.Screen>
<Stack.Screen name='welcome' options={{headerShown:false}} component={DrawerHome}></Stack.Screen>
<Stack.Screen options={{headerShown:false}} name='LoginNcell' component={LoginNcell}></Stack.Screen>
<Stack.Screen options={{headerShown:false}} name='Transfer' component={Transfer}></Stack.Screen>
<Stack.Screen options={{headerShown:false}} name='Drawer' component={Welcome}></Stack.Screen>


</Stack.Navigator>




</NavigationContainer>



)




}




export default App;