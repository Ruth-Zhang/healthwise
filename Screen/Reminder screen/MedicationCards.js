import {View, Text} from 'react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import {Ionicons, Feather, AntDesign} from '@expo/vector-icons';

export default function MedicationCards ({medicine, selectedDate}) {

    return(
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>{medicine?.name}</Text>
                <Text style={{fontSize: 17}}>{medicine?.when}</Text>
                <Text>{medicine?.dose} {medicine?.type.name}</Text>

            </View>
            <View style={styles.reminderContainer}>
                <Ionicons style={styles.icon} name="timer-outline" size={24} color="black" />
                <Text style={{fontWeight:'bold'}}>{medicine?.reminder}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightblue',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        alignItems: 'center',
        position:'relative'
    },
    subContainer:{
        flexDirection: 'flex',
    },
    reminderContainer:{
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    statusIcon: {
        position: "absolute",
        top: 5,   
        right: 5, 
    }
})