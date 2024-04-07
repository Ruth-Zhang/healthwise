import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';



export const DiseaseInfoPage = ({ diseaseInfo,goBack}) => {
    return (
       <View style={styles.container}>
           <Pressable onPress={()=>goBack ()}>Back</Pressable>
            <Text style={styles.heading}>{diseaseInfo.heading}</Text>
            {diseaseInfo.sections.map((section, index) => (
                <View key={index}>
                    <Text style={styles.title}>{section.title}</Text>
                    <Text style={styles.content}>{section.content}</Text>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    content: {
        marginTop: 5,
        fontFamily: 'Arial',
    },
});


export default DiseaseInfoPage;