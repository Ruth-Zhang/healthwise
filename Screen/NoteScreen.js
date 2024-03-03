
import NotesList from './NotesList';
import { View } from "react-native";

const NoteScreen = () => {
    return (
        <View style= {styles.container}>
            <NotesList/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      maxWidth: '960px',
	  marginRight: 'auto',
	  marginLeft: 'auto',
	  paddingRight: '15px',
	  paddingLeft: '15px',
	  minHeight: '100px',
    },
});


export default NoteScreen