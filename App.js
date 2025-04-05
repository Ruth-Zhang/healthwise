import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import SearchScreen from "./Screen/Search screen/SearchScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import NoteScreen from "./Screen/Note Screen/NoteScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startscreen from './Screen/Login screen/Startscreen';
import Login from './Screen/Login screen/login';
import Register from './Screen/Login screen/register';
import Forgetpassword from './Screen/Login screen/Forgetpassword';
import Setnewpassword from './Screen/Login screen/Setnewpassword';
import TabNavigator from './Screen/TabNavigator';
import Loginchoice from './Screen/Login screen/Loginchoice';
import Monitorlogin from './Screen/Login screen/Monitorlogin';
import Success from './Screen/Login screen/Success';
import homescreen from './Screen/chatbot/homescreen';
import IllnessEducation from './Screen/Search screen/IllnessEducation';
import Activities from './Screen/Search screen/Activities';
import DietaryAdvice from './Screen/Search screen/DietaryAdvice';
import MentalHealth from './Screen/Search screen/MentalHealth';
import SearchResult from './Screen/Search screen/SearchResult';

const Stack=createNativeStackNavigator ();

const Tab = createBottomTabNavigator();
const screenOptions= {
  tabBarShowLabel: false,
  headerShown: false,
  tarBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor: '#fff'}}>
        <Stack.Navigator initialRouteName='Startscreen'>
            <Stack.Screen name='Startscreen' component={Startscreen} />
            <Stack.Screen name='login' component={Login}/>
            <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='Forgetpassword' component={Forgetpassword}/>
            <Stack.Screen name='Setnewpassword' component={Setnewpassword}/>
            <Stack.Screen name='homescreen' component={homescreen}/>
            <Stack.Screen name='Loginchoice'component={Loginchoice}/>
            <Stack.Screen name='Success' component={Success}/>
            <Stack.Screen name='Monitorlogin' component={Monitorlogin}/>
            <Stack.Screen options={{ headerShown: false }} name= 'tabnavigator'component={TabNavigator}/>
           
            <Stack.Screen name="IllnessEducation" component={IllnessEducation} />
            <Stack.Screen name="Activities" component={Activities} />
            <Stack.Screen name="DietaryAdvice" component={DietaryAdvice} />
            <Stack.Screen name="MentalHealth" component={MentalHealth} />
            <Stack.Screen name="SearchResult" component={SearchResult} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}






