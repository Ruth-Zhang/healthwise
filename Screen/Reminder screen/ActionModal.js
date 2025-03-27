import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import MedicationCards from "./MedicationCards";
import { AntDesign, Feather,} from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ActionModal({ item, onGoBack, selectedDate}) {
    const updateMedicationStatus = async (status) => {
        try {

            const storedData = await AsyncStorage.getItem("medicationData");
            let medications = storedData ? JSON.parse(storedData) : [];

            medications = medications.map((med) => {
                if (med.name === item.name) {  
                    return { ...med, status: { ...med.status, [selectedDate]: status } };
                }
                return med;
            });

            await AsyncStorage.setItem("medicationData", JSON.stringify(medications));
            console.log(`Medication "${item.name}" marked as ${status} on ${selectedDate}`);

            onGoBack();

        } catch (error) {
            console.error("Error updating medication status:", error);
        }
    };

    return (
        <View>
            <TouchableOpacity style={{marginTop:20}} onPress={onGoBack}> 
                <AntDesign style={{color: 'black'}} name= "left" size={24} />
            </TouchableOpacity>

            <Image source={require('../../assets/bell.png')}
                style={{width: 170, height:170,marginHorizontal:'auto',marginTop:'30%', marginBottom:20}}
            />

            <View style={styles.container}>
                <Text style={{alignSelf:'center', fontSize:15}}>{selectedDate}</Text>
                <Text style={{fontSize:22, alignSelf: 'center', fontWeight:'bold', marginTop:5}}>{item.reminder}</Text>
                <Text style={{fontSize:18, alignSelf:'center', marginTop:5}}>It's time to take!</Text>

                <MedicationCards medicine={item}/>

            </View>
            <View style={{flexDirection:'row', gap:10, marginTop:25, alignSelf:'center'}}>
                <TouchableOpacity style={styles.missButton} onPress={() => updateMedicationStatus("Missed")}>
                    <AntDesign style={{color: 'red', alignItems:'center'}} name= "close" size={20} />
                    <Text style={{textAlign:'center', color:'red', fontSize:15}}>Missed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.succButton}onPress={() => updateMedicationStatus("Taken")}>
                    <Feather style={{color: 'white', alignItems:'center'}} name= "check" size={20} />
                    <Text style={{textAlign:'center', color:'white', fontSize:15}}>Taken</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create ({
    container:{
        marginTop:'auto',
        backgroundColor: 'white',
        height:'auto'
    },
    missButton:{
        padding:10,
        flexDirection:'row',
        borderWidth:1,
        borderColor:'red',
        alignSelf:'center',
        borderRadius: 10,
        width:'auto',
        gap:5
    },
    succButton:{
        padding:10,
        flexDirection:'row',
        backgroundColor:'green',
        alignSelf:'center',
        borderRadius: 10,
        width:'auto',
        gap:5
    }
})