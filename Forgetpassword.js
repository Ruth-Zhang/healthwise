import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Pressable} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Forgetpassword ({navigation}) {
    const [email, setEmail] =useState ('');
    // const [errors, setErrors]= useState({});
    // const validateForm = () => {
    //     let errors ={};
    //     if (!email)errors.email = "Email is required";
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    //   };
    //   const onPress = () => {
    //     if(validateForm()) {
    //       console.log("Submitted", email)
    //       setEmail("");
    //       setErrors({});
    //     }
    //   };c

    return (
        <SafeAreaView>
            <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={100} style={styles.container}>
        <ScrollView showVerticalScrollIndiator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>reset your password</Text>

               <TextInput style={styles.input} placeholder='Email'
               value={email} onChange={setEmail}/>
               {/* {errors.email? <text style={styles.errorText}>{errors.email}</text> : null} */}
               <Pressable onPress={() => navigation.navigate("Setnewpassword")} style={styles.button}>
               <Text style={styles.press}>   Send</Text>
               </Pressable>
               <Pressable onPress={() => navigation.navigate("login")} styles={styles.button}>
               <Text style={styles.button}>   Back to log in</Text>
               </Pressable>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles= StyleSheet.create({
    root:{
        alignItems: 'center',
        padding:25,
    },
    title :{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    input:{
        width: 350,
        height: 40,
        borderColor: "#ddd",
        borderWidth: 3,
        marginBottom: 15,
        padding: 10,
        borderRadius: 5,
      },
      button:{
        width: 180,
        height: 40,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        fontSize: 18,
        marginBottom:30,
        textAlign: 'auto',
        borderRadius:4
    },
    press:{
        width: 80,
        height: 35,
        alignItems:'center',
        fontSize: 18,
        backgroundColor: 'lightblue',
        textAlign: 'auto'
    },
    errorText: {
        color: "red",
        marginBottom: 10,
      },
})