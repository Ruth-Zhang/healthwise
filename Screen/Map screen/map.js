
import React, {useState,useEffect} from 'react';
  import MapView, {Callout, Marker} from 'react-native-maps';
  import { StyleSheet, Text, View, Dimensions, TextInput,Linking,Image, KeyboardAvoidingView, Pressable, ScrollView, TouchableOpacity } from 'react-native';
  import * as Location from 'expo-location';
  import {markers,specialMarkers} from './marker'
  
  export default function maps({navigation}) {
    
    const [mapRegion, setMapRegion] =useState({
      latitude: 49.2827,
      longitude: -123.1207,
      latitudeDelta: 0.084721,
      longitudeDelta: 0.058609,
    });
    const [userRegion,setUserRegion]=useState({
      latitude: 49.2827,
      longitude: -123.1207,
      latitudeDelta: 0.084721,
      longitudeDelta: 0.058609,
    });
    const userLocation =async()=>{
      let {status} = await Location.requestForegroundPermissionsAsync ();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location =await Location.getCurrentPositionAsync({enableHighAccuracy: true})
      setMapRegion({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta: 0.084721,
        longitudeDelta: 0.058609,
      });
      setUserRegion({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
        latitudeDelta: 0.084721,
        longitudeDelta: 0.058609,
      });
      console.log(location.coords.latitude, location.coords.longitude);
    }
  useEffect(()=>{
    userLocation();
  },[]);
  
  
  const showSpecialMarkers = () => {
    setFilteredMarkers(specialMarkers);
  };
  const [input,setInput] = useState("")
  const [filteredMarkers,setFilteredMarkers]=useState([])
  const filterMarker=(searchInput)=>{
  const filtered=markers.filter((m)=>m.name.toLowerCase().includes(searchInput.toLowerCase()));
  setFilteredMarkers(filtered);
  setInput(searchInput)
  }
    return (
      <View style={styles.container }>
        
        <MapView style={styles.map}
        onRegionChangeComplete={(region)=>setMapRegion(region)}
        region={mapRegion}>
          <Marker coordinate={userRegion} title='my location'/>
          {filteredMarkers.map(m=>(
            <Marker coordinate={{latitude:m.Latitude, latitudeDelta: 0.01, longitude:m.Longitude, longitudeDelta: 0.01}} title={m.name} >
              <Callout>
              <View style={{ width: 300, height: 400 }}> 
                <View style={{padding:10}}>
                  <Text style={styles.text}>{m.name}</Text>
                  <Text style={styles.context}>Address:{m.Location}</Text>
                  <Text style={styles.context}>Phone:{m.Phone}</Text>
                  <Text style={styles.context}>Alternate number:{m.Phones}</Text>
                  <Text style={styles.context}>Average rating:{m.AverageRating}</Text>
                  <Text style={styles.context}>Opening hours:{m.OpeningHours}</Text>
                  <Text style={styles.context}>Go to Google map:{m.GoogleMap}</Text>
                  <Image style={{width:200, height:130}} source={{url:m.Image}}/>
                  <Text style={{color: 'blue'}} onPress={()=>Linking.openURL(m.Website)}>Website:{m.Website}</Text>
                </View>
                </View>
              </Callout>
              </Marker>
          ))}
          <KeyboardAvoidingView>
          <View style={{position: 'absolute', top:70, width: 400, display: 'flex' }}>
      <TextInput value={input} onChangeText={(text)=> {setInput(text);filterMarker(text)}}
        style={{ 
          borderRadius: 10,
          margin: 10,
          color: '#000',
          borderColor: '#666',
          backgroundColor: '#FFF',
          borderWidth: 1,
          height: 45,
          paddingHorizontal: 10,
          fontSize: 18,
        }}
        placeholder={'Search'}
        placeholderTextColor={'#666'}/>
      </View>
      </KeyboardAvoidingView>
        </MapView>
        <Pressable
          style={{
            alignItem: 'top',
            position:'absolute',
            backgroundColor: "violet",
            padding: 10,
            borderRadius: 5,
            marginLeft:30,
            margin: 10,
            top:100,
            left: 110,
            shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
          }}
          onPress={showSpecialMarkers}>
          <Text style={styles.text}>
            MS Special
          </Text>
        </Pressable>
      </View>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'block'
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    button:{
      alignItem:'left',
      height: 200,
      width: 100,
      borderRadius: 10,
      margin: 10,
      color: '#000',
      marginLeft:30,
      
    },
    text:{
      fontSize:15,
      fontWeight: "bold",
    },
    context:{
      fontSize:12,
      justifyContent: 'flex-start',
      },
  });
