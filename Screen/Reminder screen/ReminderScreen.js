import { View, StyleSheet, ActivityIndicator } from "react-native";
import React from 'react';
import EmptyState from "./EmptyState";
import { useState, useEffect } from "react";
import AddMedicineScreen from "./AddMedicineScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RemindersList from "./RemindersList";
import ActionModal from "./ActionModal";

export default function ReminderScreen() {
    const [currentScreen, setCurrentScreen] = useState('');
    const [medications, setMedications] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [activeItem, setActiveItem] = useState(null);
    const [activeDate, setActiveDate] = useState(null);

    const loadMedications = async () => {
        setLoading(true);
        try {
            const storedData = await AsyncStorage.getItem('medicationData');
            if (storedData && JSON.parse(storedData).length > 0) {
                setMedications(JSON.parse(storedData));
                setCurrentScreen("RemindersList"); 
            } else {
                setCurrentScreen("EmptyState"); 
            }
        } catch (error) {
            console.error("Error loading medications:", error);
            setCurrentScreen("EmptyState");
        }
        setLoading(false);
    };

    useEffect(() => {
        loadMedications();
    }, []);

    return(
           <View style={{ padding: 25, backgroundColor: "white", height: "100%" }}>
            {loading ? (
                <ActivityIndicator size="large" color="blue" />
            ) : currentScreen === "EmptyState" ? (
                <EmptyState onNavigate={() => setCurrentScreen("AddMedicineScreen")} />
            ) : currentScreen === "AddMedicineScreen" ? (
                <AddMedicineScreen 
                    onGoBack={() => setCurrentScreen("ReminderList")}
                    onSave={loadMedications} 
                />
            ) : currentScreen === "ActionModal" ? ( 
                <ActionModal 
                    item={activeItem} 
                    selectedDate={activeDate} 
                    onGoBack={() => setCurrentScreen("RemindersList")} 
                />
            ) : (
                <RemindersList 
                    medications={medications} 
                    onGoBack={() => setCurrentScreen("AddMedicineScreen")}
                    onSelectItem={(item, selectedDate) => {
                        setActiveItem(item);
                        setActiveDate(selectedDate);  
                        setCurrentScreen("ActionModal")}}
                />
            )}
        </View>
    )
}