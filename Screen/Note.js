import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet,Text, View } from "react-native";

const NotesList= () => {
    return (
        <View style= {styles.container}>
            <Text> Hello! Welcome to the note page.</Text>
            <View style= {{justifyContent: "space-between", display:'flex', flexDirection: 'row'}}>
                <Text>20/02/2024</Text>
                <MaterialCommunityIcons name= "delete" size= '1.3rem'/>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fffdc5',
      borderRadius: '10px',
      justifyContent: 'space-between',
      minHeight: '170px',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
    },
  });

export default NotesList