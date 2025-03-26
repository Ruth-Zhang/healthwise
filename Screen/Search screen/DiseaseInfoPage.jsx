import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export const DiseaseInfoPage = ({ diseaseInfo,goBack}) => {
    return (
       <SafeAreaView style={styles.container}>
           <Pressable title='back' onPress={()=>goBack ()}><Text style={{color:'blue', fontSize:20}}> &#8249; back </Text></Pressable>
            <Text style={styles.heading}>{diseaseInfo.heading}</Text>
            {diseaseInfo.sections.map((section, index) => (
                <View key={index}>
                    <Text style={styles.title}>{section.title}</Text>
                    <Text style={styles.content}>{section.content}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },
    title: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 18
    },
    content: {
        marginTop: 5,
        fontFamily: 'Arial',
        fontSize: 18
        
    },
});


export default DiseaseInfoPage;