import { MaterialIcons } from '@expo/vector-icons'
import { useState, useEffect } from 'react';
import { StyleSheet,Text, View,TextInput, KeyboardAvoidingView, Pressable } from "react-native";

export default function Note (props) {
    const [editMode, setEditMode] = useState (false);
    const [noteText, setNoteText] = useState(props.text);
    const [noteTitle, setNoteTitle] = useState (props.title);
    const handleSaveClick = () => {
      setEditMode (false)
      props.handleEditNote (props.id, noteText, noteTitle)
    };
    useEffect(() => {
        setNoteText(props.text);
        setNoteTitle(props.title);
    }, [props.text, props.title]);
    if (editMode) {
    return (
        <KeyboardAvoidingView style={styles.container}>
           <TextInput multiline numberOfLines={1} style={{ backgroundColor: '#fffdc5', border: '1px solid black', fontSize: '20px', fontWeight: 'bold',}} value={noteTitle} placeholder="Title..." onChangeText={setNoteTitle}></TextInput>
           <TextInput multiline numberOfLines={8} style={{ backgroundColor: '#fffdc5', border: '1px solid black'}} value={noteText} placeholder="Note..." onChangeText={setNoteText}></TextInput>
           <View>
             <Pressable style={styles.button} onPress={handleSaveClick}>
                 <Text style={styles.text}>Save</Text>
             </Pressable>
           </View>
         </KeyboardAvoidingView>
    )} else {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text>{props.text}</Text>
            <View style= {{justifyContent: "space-between", display:'flex', flexDirection: 'row'}}>
                <Text>{props.date}</Text>
                <View style={{display: 'flex', flexDirection: 'row', gap: 10}}>
                <MaterialIcons onPress={() => setEditMode (true)} name= "edit" size={25}/>
                <MaterialIcons onPress={() => props.handleDeleteNote(props.id)} name= "delete" size={25}/>
                </View>
            </View>
        </View>
    )}
};
const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#fffdc5',
      borderRadius: '10px',
      justifyContent: 'space-between',
      minHeight: 250,
      marginBottom: 10,
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
      marginLeft: '5%',
      marginRight: '5%'
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width: '100px',
    },
  });

