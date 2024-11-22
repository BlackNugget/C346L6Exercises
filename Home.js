import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {datasource} from "./Data";


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight:'bold',
    },
});

// const renderItem = ({item}) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };

const Home = ({navigation}) => {
    const renderItem = ({item, index, section}) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}
            onPress={() =>
            {
                navigation.navigate("Edit", {index:index, type:section.title, key:item.key})
            }}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar/>
            <Button title='Add Letter'
                  onPress={() => {navigation.navigate('Add')}}

            />

            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title,bgcolor}})=>(
                             <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>
                                 {title}
                             </Text>
                         )}/>
        </View>
    );
};

export default Home;

//
// import React from 'react';
// import { StatusBar, Button, SectionList, Text, TouchableOpacity, View } from 'react-native';
// import { datasource } from './Data';
//
// const renderItem = ({ item, index, section, navigation }) => {
//     return (
//         <TouchableOpacity
//             style={{ borderWidth: 1, margin: 5 }}
//             onPress={() => {
//                 // Navigate to the Edit screen and pass necessary data
//                 navigation.navigate('Edit', {
//                     letter: item.key,
//                     type: section.title,  // Section title (either 'Vowels' or 'Consonants')
//                     index: index,  // The index of the item in the section
//                 });
//             }}
//         >
//             <Text style={{ fontSize: 15, margin: 10, textAlign: 'left' }}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// const Home = ({ navigation }) => {
//     return (
//         <View>
//             <StatusBar />
//             <Button title='Add Letter' onPress={() => { navigation.navigate('Add') }} />
//
//             <SectionList
//                 sections={datasource}
//                 renderItem={(props) => renderItem({ ...props, navigation })}  // Pass navigation here
//                 renderSectionHeader={({ section: { title, bgcolor } }) => (
//                     <Text style={{ fontSize: 20, margin: 10, textAlign: 'center', fontWeight: 'bold', backgroundColor: bgcolor }}>
//                         {title}
//                     </Text>
//                 )}
//             />
//         </View>
//     );
// };
//
// export default Home;

