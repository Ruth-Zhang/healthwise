import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import SearchScreen from "./Search screen/SearchScreen";
import ProfileScreen from "./ProfileScreen";
import NoteScreen from "./Note Screen/NoteScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import map from './Map screen/map';

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

export default function TabNavigator({navigation}) {
  return (
        <Tab.Navigator>
            <Tab.Screen name="Search" component={SearchScreen} options={{
              tabBarIcon: ({focused})=>{
                return (
                 <View style={{alignItems: "center", justifyContent: "center"}}>
                 <AntDesign name="search1" size={24} color={focused ? "#16247d": "#111"} />
             </View>
                )
              }
            }}
            />
            <Tab.Screen name="Map" component={map} options={{
              tabBarIcon: ({focused})=>{
                return (
                 <View style={{alignItems: "center", justifyContent: "center"}}>
                 <Feather name="map" size={24} color={focused ? "#16247d": "#111"} />
             </View>
                )
              }
            }}
           />
           <Tab.Screen name="Notes" component={NoteScreen} options={{
              tabBarIcon: ({focused})=>{
                return (
                 <View style={{alignItems: "center", justifyContent: "center"}}>
                 <MaterialIcons name="edit-note" size={24} color={focused ? "#16247d": "#111"} />
             </View>
                )
              }
            }}
            />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
              tabBarIcon: ({focused})=>{
                return (
                 <View style={{alignItems: "center", justifyContent: "center"}}>
                 <Feather name="user" size={24} color={focused ? "#16247d": "#111"} />
             </View>
                )
              }
            }}
            />
        </Tab.Navigator>
  );
}






