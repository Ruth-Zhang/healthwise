import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

const SearchScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.app}>
      <SearchBar/>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Multiple Sclerosis Resources</Text>
      <View style={styles.buttonGrid}>
        <TouchableOpacity
          style={[styles.gridButton, {borderTopWidth: 5, borderTopColor: '#83bf85',}]}
          onPress={() => navigation.navigate("IllnessEducation")}
        >
          <Text style={styles.gridTitle}>Illness Education</Text>
          <Text style={styles.gridText}>
            Insights into the causes, progression, and treatment of MS,
            including the latest research in immunology.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridButton, {borderTopWidth: 5, borderTopColor:'#529d9a',}]}
          onPress={() => navigation.navigate("Activities")}
        >
          <Text style={styles.gridTitle}>Activities</Text>
          <Text style={styles.gridText}>
            Explore exercise plans generally used for MS patients.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridButton, {borderTopWidth: 5, borderTopColor:'#c3655b',}]}
          onPress={() => navigation.navigate("DietaryAdvice")}
        >
          <Text style={styles.gridTitle}>Dietary Advice</Text>
          <Text style={styles.gridText}>
            Nutritional guidance to help inflammation, neuroprotection, and gut
            health.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.gridButton, {borderTopWidth: 5, borderTopColor:'#ffa72b',}]}
          onPress={() => navigation.navigate("MentalHealth")}
        >
          <Text style={styles.gridTitle}>Mental Health</Text>
          <Text style={styles.gridText}>
            Evidence-based psychological strategies, and mindfulness techniques.
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <Pressable style={styles.button} onPress={() => navigation.navigate("homescreen")}>
            <Text style={{textAlign:'center', fontSize:17,color:'black'}}>Dr.Bot</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    app: {
      flex: 1,
      backgroundColor: '#f5f9fc',
      paddingHorizontal:20
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
    },
    buttonGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 30,
    },
    gridButton: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 25,
      width: '48%', // Two columns
      minHeight: 180,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    gridTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: 'black',
    },
    gridText: {
      fontSize: 14,
      color: 'black',
      textAlign: "center",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20, 
      paddingVertical: 10,
      borderRadius: 20,
      backgroundColor: 'lightblue',
      marginTop: 10,
      alignSelf: 'flex-end',
    },
});
export default SearchScreen;
