import React from "react";
import { Text, View } from "react-native";

export const SearchResult = ({result,onSelect}) => {
    return (
    <View style={styles.container}>
    <Text style={styles.searchResults}
      className="search-result"
        onPress={(e) => onSelect(result)}
        >
        {result.heading}
    </Text>
    </View>
    );
};

const styles={
    searchResults:{
        fontFamily: "Arial",
        fontSize: 23,
        backgroundColor: "rgb(193, 238, 245)",
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        overflow: 'hidden',
        minHeight: 200
    },
    container:{
        width:'49%',
        
        
    }
}