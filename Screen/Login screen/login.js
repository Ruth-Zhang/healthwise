import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform,Pressable } from 'react-native';
import { useState } from 'react';

export default function login({navigation}) {
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [errors, setErrors]= useState({});
  const validateForm = () => {
    let errors ={};
    if (!username)errors.username = "Username is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    console.log ('errors', errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username,password)
      setPassword("");
      setErrors({});
      navigation.navigate ('tabnavigator')
    }
  };
  
  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 :0} style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.label}>sign in to your account</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="Enter your username" value={username} onChangeText={setUsername}/>
          {errors.username ? <text style={styles.errorText}>{errors.username}</text> : null}
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry value={password} onChangeText={setPassword} />
          {errors.password ? <text style={styles.errorText}>{errors.password}</text> : null}
          <Button style={styles.button} title="login" onPress={() => handleSubmit()} />
          <StatusBar style="auto"/>
          <Button title ="Forgot password?" onPress={()=>navigation.navigate("Forgetpassword")}/>
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
    fontSize: 19,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

