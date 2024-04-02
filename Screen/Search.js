import React from "react";
import { View, StyleSheet, Text, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

const Search = ({ handleSearchNote}) => {
    return (
        <View style={styles.container}>
            <AntDesign name= "search1" size={20}/>
            <TextInput onChangeText={(text)=>handleSearchNote(text)} style={styles.search}type="text" placeholder="Type to search..." ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
	    alignItems: 'center',
	    backgroundColor: '#edededfc',
	    borderRadius: '10px',
	    padding: 10,
	    marginBottom: 15,
        marginTop: '5%',
        marginRight: 15,
        marginLeft: 15,
    },
    search: {
        border: 'none',
	    backgroundColor: "#edededfc",
	    width: "90%",
        height: '50px',
        fontSize: 20
    },
});

export default Search