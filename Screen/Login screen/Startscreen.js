import {View, Text, StyleSheet,Button, Pressable, SafeAreaView} from "react-native";

export default function Startscreen ({navigation}) {
    return (
        <SafeAreaView>
        <View style={StyleSheet.container}>
            <Text style={styles.text}>Welcome to HealthWise</Text>
            <View style={styles.press}>
            <Pressable onPress={() => navigation.navigate("Loginchoice")} style={styles.button}>
                <Text style={styles.press}>Login your account</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("register")} style={styles.button}>
                <Text style={styles.press}>Create your account</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("tabnavigator")} style={styles.button}>
                <Text style={styles.press}>Try without account</Text>
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
    ShadowColor:"black",
    paddingTop: 65,
    textAlign:'center'
},
label: {
    fontSize: 50,
    marginBottom: 20
},
button:{
    width: "auto",
    height: 'auto',
    alignItems: 'center',
    backgroundColor: '#A7D8F8',
    fontSize: 20,
    justifyContent: 'center',
    marginBottom: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
press:{
    display: 'flex',
    width: "100%",
    padding: 10,
    justifyContent:'center',
    alignItems:'center',
    fontSize:20,
  },
  chatbot:{
    position: 'absolute', 
    right: 20, 
    bottom: -200,  
    width: "28%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    fontSize: 20,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  }

});