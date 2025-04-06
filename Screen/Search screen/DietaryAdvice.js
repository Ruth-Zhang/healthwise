import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "./SearchBar";

const DietaryAdvice = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pageContainer}>
      <SearchBar />
      <Text style={styles.title}>Dietary Advice for MS</Text>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Nutrition Recommendations</Text>
        <Text style={styles.text}>
          Nutrition plays a key role in managing Multiple Sclerosis (MS).
          While no specific diet can cure MS, healthy eating can help reduce
          inflammation, support nerve function, and improve overall well-being.
        </Text>

        <Text style={styles.subtitle}>1. Anti-Inflammatory Diet</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Eat More:</Text> Leafy greens, berries, nuts, olive oil, turmeric, and fatty fish like salmon.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Avoid:</Text> Processed foods, refined sugars, trans fats, and red meat.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Tip:</Text> The Mediterranean diet is often recommended for its anti-inflammatory benefits.
          </Text>
        </View>

        <Text style={styles.subtitle}>2. Foods for Nerve Health</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Omega-3 Fatty Acids:</Text> Found in flaxseeds, walnuts, and fish.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Vitamin B12:</Text> Essential for myelin production; sources include eggs, dairy, and lean meats.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Antioxidants:</Text> Found in colorful fruits and vegetables.
          </Text>
        </View>

        <Text style={styles.subtitle}>3. Gut Health & MS</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Probiotics:</Text> Found in yogurt, kefir, kimchi, and sauerkraut.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Prebiotics:</Text> Foods like garlic, onions, and bananas.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Fiber-Rich Foods:</Text> Whole grains, beans, and vegetables.
          </Text>
        </View>

        <Text style={styles.subtitle}>4. Hydration & MS</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Drink Water:</Text> Aim for at least 8 cups a day.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Limit Caffeine & Alcohol:</Text> These can dehydrate the body and may worsen symptoms.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Herbal Teas:</Text> Chamomile and ginger tea can help digestion.
          </Text>
        </View>

        <Text style={styles.subtitle}>5. Special Diets for MS</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Wahls Protocol:</Text> A diet rich in vegetables, healthy fats, and organic meats.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Swank Diet:</Text> Focuses on reducing saturated fats while emphasizing whole grains and fish.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Gluten-Free Diet:</Text> Some MS patients report reduced symptoms by avoiding gluten.
          </Text>
        </View>

        <Text style={styles.subtitle}>6. Supplements & MS</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Vitamin D:</Text> Many MS patients have low vitamin D levels.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Magnesium:</Text> Helps with muscle relaxation and nerve function.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Omega-3s:</Text> Supports brain and nerve health.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Consult a Doctor:</Text> Always check before starting supplements.
          </Text>
        </View>

        <Text style={styles.subtitle}>7. Meal Planning Tips</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Balance Your Plate:</Text> Include proteins, healthy fats, and fiber-rich carbs.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Batch Cooking:</Text> Prepping meals in advance makes healthy eating easier.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Healthy Snacks:</Text> Keep nuts, fruit, and yogurt for quick energy.
          </Text>
        </View>

        <Text style={styles.subtitle}>8. Foods to Avoid</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Processed Foods:</Text> High in unhealthy fats and preservatives.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Sugar & Artificial Sweeteners:</Text> May contribute to fatigue and inflammation.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Dairy:</Text> Some MS patients report increased symptoms.
          </Text>
          <Text style={styles.listItem}>
            <Text style={styles.bold}>Excess Salt:</Text> Can worsen inflammation.
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

export default DietaryAdvice;