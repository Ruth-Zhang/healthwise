import React from 'react';
import { View, Text} from 'react-native';
import { data } from "./data";  

const DetailsScreen = ({ route }) => {
  const { heading } = route.params;
  const selectedItem = data.find(item => item.heading === heading);

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 40, fontWeight: 'bold' }}>{selectedItem.heading}</Text>
      {selectedItem.sections.map((section, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
          <Text>{section.content}</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default DetailsScreen;