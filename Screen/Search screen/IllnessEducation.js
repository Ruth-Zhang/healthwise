import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

const IllnessEducation = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <SearchBar />
      <Text style={styles.title}>MS Illness Education</Text>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Understanding Multiple Sclerosis</Text>
        <Text style={styles.text}>
          Multiple Sclerosis (MS) is a chronic autoimmune disease that affects
          the central nervous system (CNS), including the brain and spinal
          cord...
        </Text>

        <Text style={styles.subtitle}>Types of Multiple Sclerosis</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Relapsing-Remitting MS (RRMS): </Text>
            The most common form, characterized by episodes of worsening symptoms.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Secondary Progressive MS (SPMS): </Text>
            Initially begins as RRMS but transitions into continuous worsening.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Primary Progressive MS (PPMS): </Text>
            Symptoms progressively worsen from the onset without clear relapses.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Progressive-Relapsing MS (PRMS): </Text>
            A rare type featuring continuous disease progression with relapses.
          </Text>
        </View>

        <Text style={styles.subtitle}>Causes and Risk Factors</Text>
        <Text style={styles.text}>
          The exact cause of MS remains unknown, but researchers believe a
          combination of genetic, environmental, and immune system factors
          contribute to its development.
        </Text>

        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Genetics: </Text> While MS is not directly
            inherited, having a close relative with MS increases the risk.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Autoimmune Dysfunction: </Text> The immune
            system mistakenly targets myelin as a foreign substance.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Environmental Factors: </Text> Vitamin D
            deficiency, smoking, and certain viruses (e.g., Epstein-Barr).
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Gender: </Text> MS is more common in women.
          </Text>
        </View>

        <Text style={styles.subtitle}>Living with MS</Text>
        <Text style={styles.text}>
          Managing MS involves a holistic approach that includes medication,
          rehabilitation, mental health support, and lifestyle adjustments.
        </Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("tabnavigator")}
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
      subtitle: {
        color: 'black',
        marginBottom: 10,
        fontSize:20,
        fontWeight:'bold'
      },
      text: {
        fontSize: 16,
        lineHeight: 24,
        marginTop: 5,
        marginBottom:15
      },
      listContainer: {
        marginTop: 10,
        marginBottom:15
      },
      listItem: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 5,
      },
      bold: {
        fontWeight: "bold",
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

export default IllnessEducation;