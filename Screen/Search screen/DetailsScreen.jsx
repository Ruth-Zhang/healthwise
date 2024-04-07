import React from 'react';
import { View, Text} from 'react-native';
import { data } from "./data";  
const DetailsScreen = ({ route }) => {
  const { heading } = route.params;
  const selectedItem = data.find(item => item.heading === heading);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{selectedItem.heading}</Text>
      {selectedItem.sections.map((section, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>
          <Text>{section.content}</Text>
        </View>
      ))}
    </View>
  );
};

export default DetailsScreen;