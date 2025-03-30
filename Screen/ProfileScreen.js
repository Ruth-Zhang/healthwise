import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Text, TouchableOpacity, Switch, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SuggestChange from "./Suggestchange";

export default function ProfileScreen() {
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [page, setPage] = useState("main");
  const [language, setLanguage] = useState("english");

  // Translations
  const text = {
    preferences: { english: "Preferences", french: "Préférences" },
    language: { english: "Language", french: "Langue" },
    darkMode: { english: "Dark Mode", french: "Mode Sombre" },
    location: { english: "Location", french: "Localisation" },
    emailNotifications: {
      english: "Email Notifications",
      french: "Notifications par e-mail",
    },
    pushNotifications: {
      english: "Push Notifications",
      french: "Notifications Push",
    },
    resources: { english: "Resources", french: "Ressources" },
    suggestChange: {
      english: "Suggest a Change",
      french: "Suggérer un changement",
    },
    contactUs: { english: "Contact Us", french: "Nous contacter" },
    rateApp: {
      english: "Rate in App Store",
      french: "Évaluer dans l'App Store",
    },
  };

  const getText = (key) => (text[key] ? text[key][language] : key); 

  const toggleDarkMode = () => {
    setForm({ ...form, darkMode: !form.darkMode });
  };

  const mainpage = (
    <SafeAreaView style={[
      styles.container,
      { backgroundColor: form.darkMode ? "#333" : "#fff" },
    ]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.profile}>
          {/* Profile Section */}
          <View style={styles.profileAvatarWrapper}>
              <Image
                source={{
                  uri: "https://poolq.blob.core.windows.net/delta/images/637817697032391318-Screen%20Shot%202022-03-01%20at%202.12.55%20PM.png",
                }}
                style={styles.profileAvatar}
              />
              <TouchableOpacity>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
          </View>
          <Text
              style={[
                styles.profileName,
                { color: form.darkMode ? "#fff" : "#414d63" },
              ]}
            >
              Technowarriors
            </Text>
            <Text
              style={[
                styles.profileAddress,
                { color: form.darkMode ? "#ccc" : "#989898" },
              ]}
            >
              123 Elf Road, North Pole 88888
            </Text>
          </View>
        </View>
        {/* Setting Section */}
        
          <View style={styles.section}>
          <Text
              style={[
                styles.sectionTitle,
                { color: form.darkMode ? "#ccc" : "#9e9e9e" },
              ]}
            >
              {getText("preferences")}
            </Text>

            {/* Language Row */}
            <TouchableOpacity
              onPress={() =>
                setLanguage(language === "english" ? "french" : "english")
              }
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#fe9400" }]}>
                <MaterialIcons name="language" color="#fff" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("language")}
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#fff" : "#C6C6C6"}
                name="chevron-right"
                size={20}
              />
            </TouchableOpacity>

            {/* Dark Mode Row */}
            <View
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}>
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FeatherIcon name="moon" color="#fff" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                Dark Mode
              </Text>

              <Switch
                onValueChange={toggleDarkMode}
                value={form.darkMode}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={form.darkMode ? "#fff" : "#f4f3f4"}
                style={styles.switchStyle}
              />
            </View>

            {/* Location Row */}
            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
                <FontAwesome5 name="map-marker-alt" color="#fff" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("location")}
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#fff" : "#C6C6C6"}
                name="chevron-right"
                size={20}
              />
            </TouchableOpacity>

            {/* Email Notifications Row */}
            <View
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
                <MaterialIcons name="email" color="#fff" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("emailNotifications")}
              </Text>

              <Switch
                onValueChange={(emailNotifications) =>
                  setForm({ ...form, emailNotifications })
                }
                value={form.emailNotifications}
                style={styles.switchStyle}
              />
            </View>

            {/* Push Notifications Row */}
            <View
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#38C959" }]}>
                <FeatherIcon name="bell" color="#fff" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("pushNotifications")}
              </Text>

              <Switch
                onValueChange={(pushNotifications) =>
                  setForm({ ...form, pushNotifications })
                }
                value={form.pushNotifications}
                style={styles.switchStyle}
              />
            </View>
          </View>

          {/* Resources Section */}
          <View style={styles.section}>
            <Text
              style={[
                styles.sectionTitle,
                { color: form.darkMode ? "#ccc" : "#9e9e9e" },
              ]}
            >
              {getText("resources")}
            </Text>

            <TouchableOpacity
              onPress={() => setPage("suggestchange")}
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#8e8d91" }]}>
                <MaterialCommunityIcons name="file-search" size={20} color="#fff" />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("suggestChange")}
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#fff" : "#C6C6C6"}
                name="chevron-right"
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#007afe" }]}>
                <FontAwesome5 name="comment-dots" size={20} color="#fff" />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("contactUs")}
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#fff" : "#C6C6C6"}
                name="chevron-right"
                size={20}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              style={[
                styles.row,
                { backgroundColor: form.darkMode ? "#555" : "#f2f2f2" },
              ]}
            >
              <View style={[styles.rowIcon, { backgroundColor: "#32c759" }]}>
                <MaterialIcons color="#fff" name="rate-review" size={20} />
              </View>

              <Text
                style={[
                  styles.rowLabel,
                  { color: form.darkMode ? "#fff" : "#0c0c0c" },
                ]}
              >
                {getText("rateApp")}
              </Text>

              <FeatherIcon
                color={form.darkMode ? "#fff" : "#C6C6C6"}
                name="chevron-right"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
    </SafeAreaView>
  );

  if (page === "main") {
    return mainpage;
  } else if (page === "suggestchange") {
    return <SuggestChange onBackPress={() => setPage("main")} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  /** Profile */
  profile: {
    padding: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  profileAvatarWrapper: {
    position: "relative",
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: "absolute",
    right: -4,
    bottom: -10,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: "#007bff",
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: "600",
    color: "#414d63",
    textAlign: "center",
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: "#989898",
    textAlign: "center",
  },
  /** Section */
  section: {
    paddingHorizontal: 24,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.1,
    marginBottom: 12,
  },
  /** Row */
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Buttons are now on the right
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "400",
    flex: 1, // Makes the text align left
  },
  switchStyle: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
