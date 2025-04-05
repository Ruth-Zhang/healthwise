import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

const SearchResult = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <SearchBar />
      <Text style={styles.title}>Search Results</Text>

      <View style={styles.content}>
        <Text style={styles.text}>Search functionality would display results here.</Text>
        
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#f5f9fc"
      },
      title: {
        color:"#2c5282",
        marginBottom: 30,
        fontSize: 25,
        fontWeight:'bold'
      },
      content: {
        backgroundColor: '#fff',
        padding: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
      },
      text: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom:15
      },
      backButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#4b79cf',
        borderRadius: 5,
        alignSelf: 'flex-start',
      },
      backButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
});

export default SearchResult;