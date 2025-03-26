import { ScrollView, View, Button, Text } from "react-native";
import Note from "./Note";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid/non-secure'; 
import NotesList from "./NotesList";
import { AntDesign } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native';
import Search from "./Search";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteScreen () {
    const [notes, setNotes, deleteNotes] = useState([]);

    useEffect (() =>{
        const save = async() => {
        await AsyncStorage.setItem(
            'react-notes-app-data',
            JSON.stringify(notes)
        )};
        save();
    }, [notes]);

    
    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=> note.id !==id);
        setNotes(newNotes);
    };

    const editNote = (id, text, title) =>{
        const newNotes = notes.map((note)=> {
            const date = new Date();
            if (note.id !==id) {return note} 
            return {
                ...note, 
                text: text,
                title: title,
                date: date.toLocaleDateString(),
            };
        })
        setNotes(newNotes)
    };

    const [showNewNote, setShowNewNote]=useState(false);
    const [searchText, setSearchText]= useState('');

    const handleAddNote =(text, title) =>{
        const date = new Date();
        const newNote = {
           id: nanoid(),
           title: title,
           text: text,
           date: date.toLocaleDateString(),
         };
         const newNotes = [newNote, ...notes];
         setNotes(newNotes);
    }

    return (
          <SafeAreaView style={{backgroundColor: '#fff', height: "103%"}}>
            <Search handleSearchNote={setSearchText}/>
            {!notes.length && !showNewNote ?(
                <View>
                    <Text style={{fontSize:23, fontWeight:'bold', marginTop:'40%', justifyContent:'center', marginHorizontal: 'auto', flexDirection: 'row', alignItems:'center'}}>You have no notes.</Text>
                    <Text style={{fontSize:15, justifyContent:'center', marginHorizontal: 50, alignItems:'center', textAlign: 'center'}}>Tap the + button to write down new notes.</Text>
                </View>
            ) : null}
            <NotesList 
                notes={notes.filter((note)=> (note.title??"").toLowerCase().includes((searchText??"").toLowerCase()))} 
                handleAddNote={handleAddNote}
                handleDeleteNote={deleteNote}
                handleEditNote={editNote}
                showNewNote={showNewNote}
                hideNewNote={() =>setShowNewNote(false)}
            />
            <AntDesign style={{backgroundColor:'#fff', marginLeft: 'auto', marginRight: '5%'}} onPress={() =>setShowNewNote(true)} name= "pluscircle" size={60} />
          </SafeAreaView>
    );
};