import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const InfoPage = ({ data, searchTerm }) => {
    const diseaseInfo = data.find(disease => disease.heading === searchTerm);

    if (!diseaseInfo) {
        return (
            <View>
                <Text>{searchTerm}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView>
            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{diseaseInfo.heading}</Text>
            {diseaseInfo.sections.map((section, index) => (
                <View key={index}>
                    <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
                    <Text>{section.content}</Text>
                </View>
            ))}
        </SafeAreaView>
    );
};

export default InfoPage;