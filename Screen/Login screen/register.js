import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform, Pressable} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
 export default function register () {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [errors, setErrors]= useState({});
  const validateForm = () => {
    let errors ={};
    if (!username)errors.username = "Username is required";
    if (!email)errors.email="Email is required";
    if (!password) errors.password = "Password is required";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username,password,email)
      setPassword("");
      setEmail("");
      setErrors({});
    }
  };
    return(
        <SafeAreaView styles={{backgroundColor:'white'}}>
            <View style={styles.form}>
              <Text style={{fontWeight:"bold", fontSize: 25,justifyContent: "center",marginTop:-50,marginBottom:20}}>Let's set up your account</Text>
          <Text style={styles.label}>Email address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" />
          {errors.email? <text style={styles.errorText}>{errors.email}</text> : null}
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} placeholder="set your username" />
          {errors.username ? <text style={styles.errorText}>{errors.username}</text> : null}
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="set your password" />
          {errors.password ? <text style={styles.errorText}>{errors.password}</text> : null}
          <Text style={styles.label}>Birthday</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yy" />
          <View style={styles.press}>
          <Pressable onPress={() => handleSubmit} style={styles.button}>
            <Text style={[styles.button,{padding:8}]}>Create your account</Text>
          </Pressable>
          </View>
          </View>
        </SafeAreaView>
    );
 };

 const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    form:{
      backgroundColor: "White",
      padding: 30,
      borderRadius: 10,
      ShadowColor:"black",
      shadowOffset: {
        width:0,
        height:2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    label:{
      fontSize: 16,
      marginBottom: 5,
      fontWeight: "bold"
    },
    input: {
        height: 40,
        borderColor: "#ddd",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
      },
      button:{
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        textAlign:'center',
        fontSize: 19,
        borderRadius: 10,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    press:{
      display: 'flex',
      width: 'auto',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      borderRadius: 10,
      marginTop:'5%'
    }
});