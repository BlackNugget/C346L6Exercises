import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({route, navigation}) => {
    const [letter, setLetter] = useState(route.params.key);
    return (
        <View style={{padding: 10}}>
            <View style={{padding: 10}}>
                <Text style={{fontWeight: 'bold'}}>Letter:</Text>
                <TextInput value={letter} maxLength={1} style={{borderWidth: 1}}
                           onChangeText={(text) => setLetter(text)}/>
            </View>
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1, margin: 10}}>
                    <Button title="SAVE"
                    onPress ={() => {
                        let indexNum = 1;
                        if (route.params.type == "Vowels") {
                            indexNum = 0;
                        }
                        datasource[indexNum].data[route.params.index].key=letter;
                        navigation.navigate("Home");
                    }
                    }
                    />
                </View>
                <View style={{flex: 1, margin: 10}}>
                    <Button title="DELETE"
                        onPress = {() => {
                            let indexNum = 1;
                            if (route.params.type == "Vowels") {
                                indexNum = 0;
                            }
                            Alert.alert("Are you sure?", '',
                                [{text: 'Yes', onPress: () => {
                            datasource[indexNum].data.splice(route.params.index, 1);
                            navigation.navigate("Home");
                                    }},
                                    {text: "No"}])
                        }}
                        />
                </View>
            </View>
        </View>
    );
};

//
// const Edit = ({ route, navigation }) => {
//     const { letter, type, index } = route.params;  // Extract params from the navigation route
//     const [updatedLetter, setUpdatedLetter] = useState(letter); // Initialize the letter state
//
//     // Save the updated letter
//     const handleSave = () => {
//         const updatedItem = { key: updatedLetter };
//         if (type === 'Vowels') {
//             datasource[0].data[index] = updatedItem;
//         } else {
//             datasource[1].data[index] = updatedItem;
//         }
//         navigation.navigate('Home');  // Navigate back to Home after saving
//     };
//
//     // Delete the letter from the list
//     const handleDelete = () => {
//         if (type === 'Vowels') {
//             datasource[0].data.splice(index, 1);
//         } else {
//             datasource[1].data.splice(index, 1);
//         }
//         navigation.navigate('Home');  // Navigate back to Home after deletion
//     };
//
//     return (
//         <View style={{ padding: 10 }}>
//             <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>Edit Letter</Text>
//
//             <View style={{ padding: 10 }}>
//                 <Text style={{ fontWeight: 'bold' }}>Letter:</Text>
//                 <TextInput
//                     style={{ borderWidth: 1, padding: 5, marginVertical: 10 }}
//                     value={updatedLetter}
//                     maxLength={1}
//                     onChangeText={(text) => setUpdatedLetter(text)}
//                 />
//             </View>
//
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <Button title="Save" onPress={handleSave} />
//                 <Button title="Delete" onPress={handleDelete} />
//             </View>
//         </View>
//     );
// };

export default Edit;
