import React from 'react'
import Profiles from './Profiles';
import { StyleSheet, View, ScrollView, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';
import AccountScreen from './AccountScreen';
import { doc, getDocs } from '@firebase/firestore';

async function getScores() {
    const querySnapshot = await getDocs(collection(getFirestore(app), "users"));
    let scores = new Map();
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "- ", doc.data().first_name, " => ", doc.data().total_points);
        scores.set(doc.data().first_name, doc.data().total_points);
    });
    return scores;
}


export default Leaderboard = async (props) => {
    const list = await (getScoes);

    return (
        <ScrollView horizontal={true} contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-end',
        }}>
            <View style={styles.container}>
                {list.map((listElement) => {
                    return (
                        <View>
                            <Profiles name={listElement.data().first_name} score={listElement.data().total_points}></Profiles>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})