import { ScrollView, View, Button } from "react-native";
import Note from "./Note";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid/non-secure'; 
import NotesList from "./NotesList";
import { AntDesign } from '@expo/vector-icons';
import {AsyncStorage} from 'react-native';
import Search from "./Search";

export default function NoteScreen () {
    const [notes, setNotes, deleteNotes] = useState([
        {
            id: nanoid(),
            title: "Day 1",
            text: "This is my first note",
            date: "15/04/2023"
        },
        {
            id: nanoid(),
            title: "Day 2",
            text: "This is my first note",
            date: "19/04/2023"
        },
        {
            id: nanoid(),
            title: "Day 3",
            text: "This is my first note",
            date: "17/04/2023"
        },
        {
            id: nanoid(),
            title: "day 4",
            text: "This is my first note",
            date: "18/04/2023"
        },
    ]);

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
          <View style={{backgroundColor: '#fff', height: "100%"}}>
            <Search handleSearchNote={setSearchText}/>
            <NotesList 
                notes={notes.filter((note)=> (note.title??"").toLowerCase().includes((searchText??"").toLowerCase()))} 
                handleAddNote={handleAddNote}
                handleDeleteNote={deleteNote}
                handleEditNote={editNote}
                showNewNote={showNewNote}
                hideNewNote={() =>setShowNewNote(false)}
            />
            <AntDesign style={{backgroundColor:'#fff', marginLeft: 'auto', marginRight: '5%'}} onPress={() =>setShowNewNote(true)} name= "pluscircle" size={60} />
          </View>
    );
};