import React, { useState } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
  Text,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import emailjs from "@emailjs/browser"; // ✅ Make sure this is installed

export default function SuggestChange({ onBackPress }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="grey" />
      </TouchableOpacity>
      <ContactUs />
    </SafeAreaView>
  );
}

function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const emailData = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };

    console.log("Submitting form with:", emailData); // ✅ Debugging log

    emailjs
      .send(
        "service_e6art19", // ✅ Correctly formatted Service ID
        "template_v4lpjfs", // ✅ Updated Template ID
        emailData,
        "XIEuMkkVWb7WAsAp4" // ✅ Correctly formatted Public Key
      )
      .then((response) => {
        console.log("Email sent successfully:", response); // ✅ Debugging log
        setSubmitted(true);
        Alert.alert("Success", "Thank you for sending a suggestion!");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error); // ✅ Debugging log
        Alert.alert("Error", "Something went wrong. Please try again.");
      });
  };

  return (
    <View style={styles.formContainer}>
      {submitted ? (
        <Text style={styles.thankYouText}>
          🎉 Thank you for sending a suggestion!
        </Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={form.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={form.email}
            onChangeText={(text) => handleChange("email", text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
            multiline
            numberOfLines={5}
            value={form.message}
            onChangeText={(text) => handleChange("message", text)}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Send</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F9FA",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#007BFF",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  thankYouText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28A745",
    textAlign: "center",
  },
});
