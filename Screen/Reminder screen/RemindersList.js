import { View, Text, FlatList, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MedicationCards from "./MedicationCards";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyState from "./EmptyState";
import {AntDesign} from '@expo/vector-icons'

export default function RemindersList({ onGoBack, onSelectItem }) {
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
    const [storedMedications, setStoredMedications] = useState([]);
    const [filteredMedications, setFilteredMedications] = useState([]);
   
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    
    const dateList = Array.from({ length: 8 }, (_, i) => {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        return {
            id: date.toISOString().split("T")[0], 
            date: date.getDate().toString(),
            day: daysOfWeek[date.getDay()],
        };
    });

    useEffect(() => {
        const fetchMedications = async () => {
            try {
                const storedData = await AsyncStorage.getItem("medicationData");
                if (storedData) {
                    setStoredMedications(JSON.parse(storedData) || []);
                }
            } catch (error) {
                console.error("Error fetching medications:", error);
            }
        };

        fetchMedications();
    }, []);

    useEffect(() => {
        if (!selectedDate || storedMedications.length === 0) return;
        
        const filtered = storedMedications.filter((med) => {
            const medStartDate = new Date(med.startDate).toISOString().split("T")[0];
            const medEndDate = new Date(med.endDate).toISOString().split("T")[0];

            return selectedDate >= medStartDate && selectedDate <= medEndDate;
        });
    
        setFilteredMedications(filtered);
    }, [selectedDate, storedMedications]);

    return (
        <View style={{ marginTop: 20, backgroundColor: "white", flex:1 }}>

            <Image source={require('../../assets/medication.jpg')}
                style={{width: 380, height:200, alignSelf: 'center',}}
            />

            <FlatList
                data={dateList}
                horizontal
                style={{marginTop: 8, flexGrow: 0}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.dateCalendar,{backgroundColor: item.id==selectedDate? 'lightblue' : '#f0f0f0'}]}
                    onPress={()=>{setSelectedDate(item.id)}}>
                        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5, color:item.id==selectedDate? 'white':'black' }}>{item.day}</Text>
                        <Text style={{ fontSize: 15, marginTop: 10, marginBottom: 5, color:item.id==selectedDate? 'white':'black'}}>{item.date}</Text>
                    </TouchableOpacity>
                )}
            />
            {filteredMedications?.length>0? <FlatList
                data={filteredMedications}
                style={{marginTop: 10}}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => { 
                    return (
                    <TouchableOpacity onPress={() => onSelectItem(item, selectedDate)}>
                        <MedicationCards medicine={item}/>
                    </TouchableOpacity>
                )}}
            />:<EmptyState onNavigate={onGoBack} />}

            <TouchableOpacity onPress={onGoBack} style={{ bottom: '0%',right: "0%", position:'absolute' }}>
                <AntDesign style={{backgroundColor:'#fff',}} name= "pluscircle" size={60} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    dateCalendar:{
        padding:10,
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
    },
    list: {
        padding: 15, 
        backgroundColor: "#f0f0f0",  
        display: 'flex',
        alignItems: 'center',
        marginRight: 10,
        borderRadius: 10,
        flexGrow: 0,
        flexDirection: 'row',
    }
})