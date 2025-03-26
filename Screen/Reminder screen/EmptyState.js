import { View, Image, Text, StyleSheet, TouchableOpacity} from "react-native";
import React from 'react';


export default function EmptyState({ onNavigate }) {
    
    return (
        <View style={{marginTop: 80, display:'flex', alignItems:'center'}}>
            <Image source={require('../../assets/medicine.png')}
             style={{width: 120, height:120, marginHorizontal: 'auto'}}
            />
            <Text style={{fontSize:23, fontWeight:'bold', marginTop:20, alignItems:'center'}}>
                No Medications!
            </Text>
            <TouchableOpacity style={styles.button}
            onPress={onNavigate}>
                <Text style={{textAlign:'center', fontSize:17,color:'white'}}>+ Add New Medication</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8,
        backgroundColor: 'black',
        width: '95%',
        marginTop: 25
    },
  });