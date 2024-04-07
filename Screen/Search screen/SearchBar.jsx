import React from "react";
import {useState} from "react";
import {data} from "./data"
import { FontAwesome6,  } from '@expo/vector-icons'
import { TextInput, View } from "react-native";

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
    <View className="input-wrapper">
     <FontAwesome6 name="search" id="search-icon" />
    <TextInput placeholder="Search..." 
    value={input} 
    onChangeText={(text) => handleChange(text)}
    
    />
  </View>
  );
};