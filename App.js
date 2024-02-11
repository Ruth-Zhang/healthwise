import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from "./Screen/SearchScreen"
import ProfileScreen from "./Screen/ProfileScreen"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();
export default function App() {
  return ( <>
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
    </View> </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




