import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform,Pressable } from 'react-native';

export default function Success({navigation}) {

  return (
    
        <View style={styles.container}>
          <Text style={styles.label}>You have registered successfully!</Text>
          <Text style={styles.label}>This is your monitor code: V39FHS</Text>
          <Pressable onPress={() => navigation.navigate("login")} style={styles.button}>
            <Text style={{fontSize:20}}>Go back to login</Text>
          </Pressable>
        </View>
    
  );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: -300,
  },
  
  label:{
    padding: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    justifyContent:"center",
    alignItems:"center",
   ShadowColor:"black",
   paddingTop: 1,
   paddingBottom:5,
  },
  button:{
    width: 190,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    fontSize: 19,
    borderRadius: 10,
    paddingTop: 1,
    shadowColor: "#000",
shadowOffset: { width: 0, height: 3 },
shadowOpacity: 0.3,
shadowRadius: 4,
marginTop: 30,
},
press:{
  display: 'flex',
  width: '100%',
justifyContent:'center',
alignItems:'center',
borderRadius: 10,
},
 
});