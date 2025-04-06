import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform,Pressable } from 'react-native';
import { useState } from 'react';

export default function Monitorlogin({navigation}) {
  
  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 :0} style={styles.container}>
        <View style={styles.form}>
          <Text style={{fontSize:55, fontWeight:'bold',justifyContent:'center',marginTop:-200, marginLeft:80,marginBottom:10,color:'lightblue'}}>Hello</Text>
          <Text style={{fontSize:20, marginBottom:70,marginLeft:45}}>Sign in to your account</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Enter your username" />
          <Text style={styles.label}>Monitor code</Text>
          <TextInput style={styles.input} placeholder="Enter your monitor code" />
          <Button title="Login" onPress={() => navigation.navigate("tabnavigator")} />
          <StatusBar style="auto"/>
        </View>
    </KeyboardAvoidingView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form:{
    backgroundColor: "White",
    padding: 20,
    borderRadius: 10,
    ShadowColor:"black",
    shadowOffset: {
      width:0,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label:{
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent:"center",
    alignItems:"center",
   ShadowColor:"black",
   paddingTop: 1,
   paddingBottom:5,
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width:300
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});