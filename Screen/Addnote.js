import { View, Text, Pressable, TextInput, KeyboardAvoidingView, Modal } from "react-native"
import { StyleSheet } from "react-native";
import { useState } from "react";
import { nanoid } from 'nanoid/non-secure'; 

const Addnote = ({ handleAddNote, hideNewNote }) => {
      
        const [noteText, setNoteText] = useState('');
        const [noteTitle, setNoteTitle] = useState ('');
        const handleChange = (event) => {
              setNoteText(event.target.value)
        };
        const handleSaveClick = () => {
          handleAddNote(noteText, noteTitle);
          setNoteText('');
          hideNewNote();
        };

        return (
             <KeyboardAvoidingView style={styles.container}>
                <TextInput multiline numberOfLines={1} style={{ backgroundColor: '#fffdc5', border: 'none', fontSize: '20px', fontWeight: 'bold',}} value={noteTitle} placeholder="Title..." onChangeText={setNoteTitle}></TextInput>
                <TextInput multiline numberOfLines={8} style={{ backgroundColor: '#fffdc5', border: 'none'}} value={noteText} placeholder="Note..." onChangeText={setNoteText}></TextInput>
                <View>
                  <Pressable style={styles.button} onPress={handleSaveClick}>
                      <Text style={styles.text}>Save</Text>
                  </Pressable>
                </View>
              </KeyboardAvoidingView>
        );
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
      text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });

export default Addnote