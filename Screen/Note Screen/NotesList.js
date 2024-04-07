import { ScrollView, View } from "react-native";
import Note from "./Note";
import Addnote from "./Addnote";
import { Dimensions } from 'react-native';

const NotesList = ({ notes, handleAddNote, handleDeleteNote, showNewNote, hideNewNote, handleEditNote }) => {
    const NoteListHeight = Dimensions.get('window').height * 0.8;
    return (
        <ScrollView style= {{width: '100%', backgroundColor: '#fff',marginRight: 'auto', marginLeft: 'auto', paddingRight: '15px', paddingLeft: '15px', height:'85%', display: 'grid', gridGap: 10}}>
            {showNewNote&&
            <Addnote handleAddNote={handleAddNote} hideNewNote={hideNewNote} />}
            {notes.map((note) =>(
              <Note text={note.text} date={note.date} title={note.title} id={note.id} handleDeleteNote={handleDeleteNote} handleEditNote={handleEditNote}/>
            ))}
        </ScrollView>
    );
};

export default NotesList