import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

const Activities = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <SearchBar />
      <Text style={styles.title}>Activities for MS Patients</Text>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Recommended Exercises</Text>
        <Text style={styles.text}>
          Regular physical activity is essential for managing Multiple Sclerosis
          (MS). It can help improve mobility, reduce fatigue, enhance muscle
          strength, and increase overall well-being.
        </Text>

        <Text style={styles.subtitle}>1. Low-Impact Exercises</Text>
        <Text style={styles.text}>
          These exercises are gentle on the body while still providing a
          cardiovascular benefit.
        </Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Aquatic Therapy: </Text> Exercises in
            water reduce strain on joints. Swimming and water aerobics are great
            options.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Walking: </Text> Improves coordination and
            cardiovascular health. Start with short distances.
          </Text>
        </View>

        <Text style={styles.subtitle}>2. Strength Training</Text>
        <Text style={styles.text}>
          Building muscle strength can prevent weakness and improve function.
        </Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Resistance Bands: </Text> Portable, gentle
            on joints, and useful for strength training.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Light Weightlifting: </Text> Using light
            weights can improve muscle strength and endurance.
          </Text>
        </View>

        <Text style={styles.subtitle}>3. Balance and Flexibility Exercises</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Yoga: </Text> Improves flexibility,
            balance, and muscle relaxation.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Tai Chi: </Text> A gentle martial art with
            slow movements to enhance coordination.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Stretching: </Text> Helps prevent stiffness
            and improve flexibility.
          </Text>
        </View>

        <Text style={styles.subtitle}>4. Cardiovascular Exercises</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Cycling: </Text> Stationary or outdoor
            cycling provides a low-impact cardio workout.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Low-Impact Aerobics: </Text> Dancing or
            aerobics help improve heart health.
          </Text>
        </View>

        <Text style={styles.subtitle}>5. Tips for Exercising Safely with MS</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Start Slowly: </Text> Begin with light
            exercises and increase gradually.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Stay Hydrated: </Text> Drink water before,
            during, and after workouts.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Rest When Needed: </Text> Listen to your
            body and take breaks.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Work with a Specialist: </Text> A physical
            therapist can create a personalized exercise plan.
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

export default Activities;