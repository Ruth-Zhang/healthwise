import React, {useState,useEffect} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TextInput,Button,Image, KeyboardAvoidingView, Pressable } from 'react-native';
import * as Location from 'expo-location';
import {markers} from './marker'
import { Linking } from 'react-native';


export default function maps() {
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
          <Marker coordinate={{latitude:m.Latitude, latitudeDelta: 0.01, longitude:m.Longitude, longitudeDelta: 0.01}} title='name' >
            <Callout>
              <View style={{padding:10}}>
                <Text styel={styles.text}>{m.name}</Text>
                <Text>Phone:{m.Phone}</Text>
                <Text>Average rating:{m.Averagerating}</Text>
                <Text>Opening hours:{m.OpeningHours}</Text>
                <Image style={{width:200, height:130}} source={{url:m.Image}}/>
                <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL(m.Website)}>Website:
        {m.Website}</Text>
              </View>
            </Callout>
            </Marker>
        ))}
      
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
    
      </MapView>
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
    alignItem:'center',
    height: 200,
    width: 150,
  },
  text:{
    fontSize:10,
    fontWeight: "bold",
  }
});
  