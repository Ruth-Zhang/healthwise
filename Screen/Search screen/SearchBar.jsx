import React from "react";
import {useState} from "react";
import {data} from "./data"
import { AntDesign } from '@expo/vector-icons'
import { TextInput, View, StyleSheet, borderRadius } from "react-native";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

const fetchData = (value) => {
return data;  
  
};

const handleChange = (value) => {
  setResults(value)
  setInput(value)
  fetchData(value)
};

  return ( 
  <View style={styles.container}>
  <AntDesign name= "search1" size={20}/>
  <TextInput onChangeText={(text)=>handleChange(text)} style={styles.search} value={input} type="text" placeholder="Type to search..." ></TextInput>
  </View>
  );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
	    alignItems: 'center',
	    backgroundColor: '#edededfc',
	    borderRadius: 8,
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
        fontSize: 20,
        borderRadius: 10
    },
});