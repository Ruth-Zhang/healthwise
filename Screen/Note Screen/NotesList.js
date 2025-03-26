import { ScrollView, View } from "react-native";
import Note from "./Note";
import Addnote from "./Addnote";
import { Dimensions } from 'react-native';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, showNewNote, hideNewNote, handleEditNote }) => {
    const NoteListHeight = Dimensions.get('window').height * 0.9;
    return (
        <ScrollView style= {{width: '100%', backgroundColor: '#fff',marginRight: 'auto', marginLeft: 'auto', paddingRight: '5', paddingLeft: '5', height:'100%', display: 'grid', gridGap: 10}}>
            {showNewNote&&
            <Addnote handleAddNote={handleAddNote} hideNewNote={hideNewNote} />}
            {notes.map((note) =>(
              <Note key={note.id} length={note.length} text={note.text} date={note.date} title={note.title} id={note.id} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
            ))}
        </ScrollView>
    );
};

export default NotesList