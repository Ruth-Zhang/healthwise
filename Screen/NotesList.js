import { View } from "react-native";
import Note from "./Note";

const NotesList = () => {
    return (
        <View style= {{display: 'grid', gridGap: '1rem'}}>
            <Note/>
            <Note/>
            <Note/>
        </View>
    );
};

export default NotesList