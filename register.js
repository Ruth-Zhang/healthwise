import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform, Pressable} from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

 export default function Register ({navigation}) {
  const [email, setEmail]=useState("");
  const [username, setUsername]=useState("");
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
      navigation.navigate ('tabnavigator')
    }
  };
    return(
        <SafeAreaView>
          <View style={styles.form}>
          <Text style={styles.label}>email address</Text>
          <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail}/>
          {errors.email? <Text style={styles.errorText}>{errors.email}</Text> : null}
          <Text style={styles.label}>username</Text>
          <TextInput style={styles.input} placeholder="set your username" value={username} onChangeText={setUsername}/>
          {errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : null}
          <Text style={styles.label}>password</Text>
          <TextInput style={styles.input} placeholder="set your password" value={password} onChangeText={setPassword}/>
          {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
          <Text style={styles.label}>birthday</Text>
          <TextInput style={styles.input} placeholder="dd/mm/yy"/>
          <View style={styles.press}>
          <Pressable onPress={() => handleSubmit ()} style={styles.button}>
            <Text style={styles.button}>  Create your account</Text>
          </Pressable>
          </View>
          </View>
        </SafeAreaView>
    );
 };

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
      fontSize: 16,
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
      button:{
        width: 'auto',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        fontSize: 16,
        textAlign: 'center',
        borderRadius:4
    },
    press:{
      display: 'flex',
      width: '100%',
      justifyContent:'center',
      alignItems:'center',
    }
});