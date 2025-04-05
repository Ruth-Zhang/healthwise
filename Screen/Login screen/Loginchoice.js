import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform,Pressable,Image } from 'react-native';

export default function Loginchoice({navigation}) {

  return (
    <KeyboardAvoidingView
    behavior='padding'
    keyboardVerticalOffset={Platform.OS === "ios" ? 100 :0} style={styles.container}>
        <View style={styles.form}>
          <Pressable onPress={() => navigation.navigate("login")} style={styles.button}>
            <Image source={{uri:"https://images.icon-icons.com/2266/PNG/512/crowd_patient_patients_icon_140474.png"}} style={{width:150, height:150,marginTop:-180,marginBottom:20}}/>
            <Text style={styles.label}>Patient</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Monitorlogin")} style={styles.button}>
          <Image source={{uri:"https://cdn-icons-png.flaticon.com/512/7541/7541894.png"}} style={{width:150, height:150,marginTop:-180,marginBottom:20}}/>
            <Text style={styles.label}>Monitor</Text>
          </Pressable>
        </View>
    </KeyboardAvoidingView>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  form:{
    backgroundColor: "White",
    padding: 20,
    borderRadius: 10,
    ShadowColor:"black",
    shadowOffset: {
      width:0,
      height:2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button:{
    width: 250,
    height: 280,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingTop:200,
    marginTop:30,
    marginBottom:40,
    borderColor: 'black',
    borderWidth: 1,
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
 
});