import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Button, TextInput, Pressable} from 'react-native';


export default function Setnewpassword ({navigation}) {
    const [code, setCode] =useState ('');
    const [newPassword, setNewPassword]=useState ('');
    const onSubmitPressed =() => {
        console.warn('onSendPressed');
    };

    return (
        <ScrollView showVerticalScrollIndiator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>reset your password</Text>

               <TextInput style={styles.input} placeholder='code'
               value={code}
               onChange={setCode}/>
               <TextInput style={styles.input} placeholder='enter your new password'
               value={newPassword} onChange={setNewPassword}/>

               <Pressable onPress={onSubmitPressed} style={styles.press}>
               <Text style={styles.press}>  Submit</Text>
               </Pressable>
               

            </View>
        </ScrollView>
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
        width: 150,
        height: 30,
        alignItems: 'center',
        backgroundColor: 'lightblue',
        fontSize: 20,
        flex:1,
    },
    press:{
        width: 82,
        height: 28,
        alignItems:'center',
        fontSize: 20,
        backgroundColor: 'lightblue',
        borderRadius:30,
        borderColor:"black",
        shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    },
})