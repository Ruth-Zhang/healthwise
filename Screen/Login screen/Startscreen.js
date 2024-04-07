import {View, Text, StyleSheet,Button, Pressable, SafeAreaView} from "react-native";

export default function Startscreen ({navigation}) {
    return (
        <SafeAreaView>
        <View style={StyleSheet.container}>
            <Text style={styles.text}>Welcome to HealthWise</Text>
            <View style={styles.press}>
            <Pressable onPress={() => navigation.navigate("login")} style={styles.button}>
                <Text style={styles.press}>   Login your account</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("register")} style={styles.button}>
                <Text style={styles.press}>   Create your account</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("tabnavigator")} style={styles.button}>
                <Text style={styles.press}>   Try without account</Text>
            </Pressable>
            </View>
        </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
    width: "100%",
        flex:10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
},
text: {
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 100,
    justifyContent:"center",
    alignItems:"center",
},
label: {
    fontSize: 50,
    marginBottom: 20
},
button:{
    width: "50%",
    height: 40,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 60,
},
press:{
    display: 'flex',
    width: "100%",
justifyContent:'center',
alignItems:'center',
fontSize:18,
  },

});