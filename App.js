import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import SearchScreen from "./Screen/SearchScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import NoteScreen from "./Screen/NoteScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Startscreen from './Screen/Login screen/Startscreen';
import login from './Screen/Login screen/login';
import register from './Screen/Login screen/register';
import maps from './Screen/Map screen/map';
import Forgetpassword from './Screen/Login screen/Forgetpassword';
import Setnewpassword from './Screen/Login screen/Setnewpassword';


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
            <Stack.Screen name='login' component={login}/>
            <Stack.Screen name='register' component={register}/>
            <Stack.Screen name='maps' component={maps}/>
            <Stack.Screen name='Forgetpassword' component={Forgetpassword}/>
            <Stack.Screen name='Setnewpassword' component={Setnewpassword}/>
        </Stack.Navigator>
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
            <Tab.Screen name="Map" component={maps} options={{
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
    </NavigationContainer>
  );
}






