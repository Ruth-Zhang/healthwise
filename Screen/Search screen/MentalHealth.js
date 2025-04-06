import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

const MentalHealth = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <SearchBar />
      <Text style={styles.title}>Mental Health Support</Text>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Coping with MS</Text>
        <Text style={styles.text}>
          Multiple Sclerosis (MS) not only affects physical health but can
          also have a significant impact on mental well-being. Managing mental
          health is crucial for coping with the emotional challenges that come
          with MS, including anxiety, depression, and cognitive changes.
        </Text>

        <Text style={styles.subtitle}>1. Coping with MS-Related Anxiety</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Mindfulness Meditation:</Text> Mindfulness helps reduce anxiety by promoting a state of awareness and focus.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Breathing Exercises:</Text> Deep breathing techniques help calm the nervous system and reduce anxiety.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Support Groups:</Text> Joining a support group can provide emotional relief and a sense of community.
          </Text>
        </View>

        <Text style={styles.subtitle}>2. Dealing with MS-Related Depression</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Cognitive Behavioral Therapy (CBT):</Text> CBT helps challenge negative thoughts and develop healthier coping strategies.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Medication:</Text> Antidepressant medications may be prescribed to help manage depression symptoms.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Social Support:</Text> Staying connected with family and friends is crucial for emotional well-being.
          </Text>
        </View>

        <Text style={styles.subtitle}>3. Addressing Cognitive Changes</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Brain Exercises:</Text> Engaging in mentally stimulating activities like puzzles and learning new skills.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Routine and Organization:</Text> Using tools like calendars or reminder apps can help reduce memory problems.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Rest and Sleep:</Text> Adequate rest and sleep are vital for cognitive health.
          </Text>
        </View>

        <Text style={styles.subtitle}>4. Coping Strategies for MS-Related Stress</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Relaxation Techniques:</Text> Progressive muscle relaxation and aromatherapy can help reduce stress.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Physical Activity:</Text> Regular exercise helps alleviate stress by promoting relaxation.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Time for Yourself:</Text> Setting aside time for hobbies or social activities can help reduce stress.
          </Text>
        </View>

        <Text style={styles.subtitle}>5. Seeking Professional Help</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Therapy:</Text> Individual or group therapy can be beneficial for managing emotional aspects of MS.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Psychiatric Care:</Text> Medication may be prescribed by a psychiatrist to manage symptoms of anxiety or depression.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>MS-specific Support Services:</Text> Many MS organizations offer mental health services tailored to MS patients.
          </Text>
        </View>

        <Text style={styles.subtitle}>6. Building Resilience</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Focus on What You Can Control:</Text> Focus on aspects of life you can control, like staying active and seeking emotional support.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Set Realistic Goals:</Text> Setting small, achievable goals helps maintain a sense of purpose and accomplishment.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Positive Thinking:</Text> Cultivating a positive mindset and practicing gratitude can help build emotional strength.
          </Text>
        </View>

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

export default MentalHealth;