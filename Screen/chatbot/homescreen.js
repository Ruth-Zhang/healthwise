import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Image, Pressable, Modal} from 'react-native';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import ChatFaceData from './ChatFaceData';
import { WebView } from "react-native-webview";

export default function homescreen ({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
    const [chatFaceData,setChatFaceData]=useState([]);
    const [selectedChatFaceData,setSelectedChatFaceData]=useState([]);
useEffect(()=>{
    setChatFaceData(ChatFaceData)
    setSelectedChatFaceData(ChatFaceData[0])
},[])
    return (
            <View style={styles.container}>
                <Text style={[{color:selectedChatFaceData.primary}, {fontWeight:'bold',fontSize:40}]}>Hello</Text>
                <Text style={{fontSize:30,fontWeight:'bold'}}>I am {selectedChatFaceData.name}</Text>
              <Image source={{uri:selectedChatFaceData.image}} style={{width:150, height:150,marginTop:50}}/>
              <Text style={styles.container}>How can I help you?</Text>
              <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                              <Text style={styles.press}>Start chatting</Text>
                          </Pressable>
      <Modal visible={modalVisible} animationType="slide">
        <WebView source={{ uri: "https://bot.writesonic.com/share/bot/f3b7554c-d2b0-4716-8f84-b4ad7c429507" }} style={{ flex: 1 }} />
        <Pressable onPress={() => setModalVisible(false)} style={styles.pressable}>
                              <Text style={{fontSize:15, color:'#fff'}}>Quit</Text>
                          </Pressable>
      </Modal>
            </View> 
    );
}; 
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      paddingTop: 90,
      fontSize:25,
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
  button:{
    width: "50%",
    height: 40,
    alignItems: 'center',
    backgroundColor: 'orange',
    justifyContent: 'center',
    marginBottom: 200,
    borderRadius:100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
press:{
fontWeight:'bold',  
fontSize:18,
},
pressable:{
  width: "15%",
    height: 30,
    alignItems: 'center',
    backgroundColor: 'purple',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius:50,
    marginLeft: 50, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
}
    });