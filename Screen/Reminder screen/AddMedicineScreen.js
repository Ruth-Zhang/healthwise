import { View, Text, StyleSheet, TextInput, FlatList, } from 'react-native'
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome6, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { TypeList, WhenToTake } from './Options';
import { Picker } from '@react-native-picker/picker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddMedicineScreen({ onGoBack, onSave}) {
    const [formData, setFormData] = useState ({
        name: '',
        type: '',
        dose: '',
        when: '',
        startDate: '',
        endDate: '',
        reminder: '',
      });
    const [pickerVisible, setPickerVisible] = useState(false);
    const [showStartDate, setShowStartDate]=useState(false);
    const [showEndDate, setShowEndDate]=useState (false);
    const [showTimePicker, setShowTimePicker]=useState (false);

    const saveMedication = async () => {
            if (!formData.name || !formData.type || !formData.dose || !formData.when || !formData.startDate || !formData.endDate || !formData.reminder) {
                alert("Please fill in all fields before saving."); 
                return;
            }
        
            try {
                const formattedStartDate = new Date(formData.startDate).toISOString().split("T")[0];
                const formattedEndDate = new Date(formData.endDate).toISOString().split("T")[0];

                const newMedication = {
                    ...formData,
                    startDate: formattedStartDate,
                    endDate: formattedEndDate,
                };

                const storedData = await AsyncStorage.getItem('medicationData');
                let medications = storedData ? JSON.parse(storedData) : []; 
                if (!Array.isArray(medications)) {
                    medications = []; 
                }
                medications.push(newMedication);
                await AsyncStorage.setItem('medicationData', JSON.stringify(medications));
                alert("Medication saved successfully!"); 
                onSave(); 

            } catch (error) { 
                console.error("Error saving medication:", error); 
                alert(`Failed to save medication. Error: ${error.message}`);
            }
    };
   
    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    
        setPickerVisible(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onGoBack}>
                <AntDesign style={{color: 'black'}} name= "left" size={24} />
            </TouchableOpacity>
            <Text style={styles.text}>Add New Medication</Text>

            <View style={styles.inputGroup}>
                <FontAwesome6 style={styles.icon} name= "kit-medical" size={24} color="black"/>
                <TextInput style={{flex: 1, marginLeft: 10, fontSize: 16}}placeholder='Medicine Name'
                    onChangeText={(value)=>onHandleInputChange('name', value)}
                />
            </View>

            {/*Type List */}
            <FlatList style={{flexGrow: 0}}
                data={TypeList}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                renderItem={({item, index})=>(
                    <TouchableOpacity style={[styles.medlist, {backgroundColor: item.name==formData?.type?.name? 'grey' : 'white'}]}
                    onPress={()=>onHandleInputChange('type', item)}>
                        <Text style={{ font: 16, color:item.name==formData?.type?.name? 'white':'black'}}>{item?.name}</Text>
                    </TouchableOpacity>
                )}
            />

             {/*Dose Input */}
             <View style={styles.inputGroup}>
                <FontAwesome6 style={styles.icon} name= "pills" size={24} color="black"/>
                <TextInput style={{flex: 1, marginLeft: 10, fontSize: 16}}placeholder='Dose, Ex. 2mL'
                    onChangeText={(value)=>onHandleInputChange('dose', value)}
                />
            </View>

            {/*When To Take Dropdown */}
            <View style={[styles.inputGroup, {height: '10%'}]}>
                <MaterialIcons style={styles.icon} name= "access-time" size={24} color="black"/>
                <TouchableOpacity onPress={() => setPickerVisible(!pickerVisible)}>
                    <Text style={{ display: 'flex', fontSize: 16, marginLeft: 10 }}>
                        {pickerVisible ? null : formData?.when || 'Select Time'}
                    </Text>
                </TouchableOpacity>
                {pickerVisible && (
                <Picker
                    selectedValue={formData?.when}
                    onValueChange={(itemValue, itemIndex)=>
                        onHandleInputChange('when', itemValue)
                    }
                    style={{width:'90%',}}
                >
                    {WhenToTake.map((item, index)=>(
                        <Picker.Item key={index} label={item} value={item} />
                    ))}
                </Picker>
                )}
            </View>

            {/* Start and End Date */}
            <View style={styles.dateInputGroup}>
            {/* Start Date */}
                <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Ionicons style={styles.icon} name="calendar-outline" size={24} color="black" />
                    {showStartDate ? (
                    <RNDateTimePicker
                        mode="date"
                        display="default"
                        minimumDate={new Date()}
                        onChange={(event, selectedDate) => {
                            if (event.type === 'set') {
                            onHandleInputChange('startDate', selectedDate.toDateString());
                            }
                            setShowStartDate(false);
                        }}
                        value={formData?.startDate ? new Date(formData.startDate) : new Date()}
                        />
                    ) : (
                        <TouchableOpacity style={{ padding: 10, flex: 1, marginLeft: 5 }}
                            onPress={() => setShowStartDate(true)}
                            >
                            <Text>{formData?.startDate ? formData.startDate :'Start Date'}</Text>
                        </TouchableOpacity>
                    )}
                </View>
                {/* End Date */}
                <View style={[styles.inputGroup, { flex: 1 }]}>
                    <Ionicons style={styles.icon} name="calendar-outline" size={24} color="black" />
                    {showEndDate ? (
                    <RNDateTimePicker
                        mode="date"
                        display="default"
                        minimumDate={new Date()}
                        onChange={(event, selectedDate) => {
                        if (event.type === 'set') {
                            onHandleInputChange('endDate', selectedDate.toDateString());
                            }
                            setShowEndDate(false);
                        }}
                        value={formData?.endDate ? new Date(formData.endDate) : new Date()}
                    />
                    ) : (
                        <TouchableOpacity style={{ padding: 10, flex: 1, marginLeft: 5 }}
                            onPress={() => setShowEndDate(true)}
                            >
                            <Text>{formData?.endDate ? formData.endDate: 'End Date'}</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            {/* Set Reminder Input */}
            <View style={styles.dateInputGroup}>
                <View style={[styles.inputGroup, { flex: 1 }]}>
                <Ionicons style={styles.icon} name="timer-outline" size={24} color="black" />
                {showTimePicker? ( <RNDateTimePicker
                mode='time'
                onChange={(event, selectedDate) => {
                    if (event.type === 'set') {
                        const formattedTime = selectedDate.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: true,
                          });
                        onHandleInputChange('reminder', formattedTime);
                        }
                   setShowTimePicker(false);
                }}
                value={formData?.reminder ? new Date(formData.reminder) : new Date()}
            />
            ):(
                <TouchableOpacity style={{marginLeft: 5, flexDirection: 'row', flex: 1, padding: 5}}
                    onPress={() => setShowTimePicker(true)}
                    >
                    <Text style={{flex: 1,fontSize: 14}}>{formData?.reminder ? formData.reminder: 'Select Reminder Time'}</Text>
                </TouchableOpacity>
            )}
                </View>
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={saveMedication}>
                <Text style={{color: 'white', textAlign: 'center'}}>Add New Medication</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:60
    },
    button: {
        marginTop: 30,
        backgroundColor: 'white',
        position: 'absolute'
    },
    inputGroup: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginTop:"5%",
        backgroundColor: 'white'
    },
    icon: {
        borderRightWidth: 1,
        paddingRight: 8,
    },
    medlist: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        marginTop:15,
        marginRight:4
    },
    dateInputGroup: {
        flexDirection:'row',
        gap: 10
    },
    saveButton: {
        padding: 15,
        backgroundColor: 'black',
        borderRadius: 15,
        width: '100%',
        marginTop: 20,
    }
});