import React from 'react'
import Profiles from './Profiles';
import { StyleSheet, View, ScrollView, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getImageSourceProperties } from 'react-native/Libraries/Image/ImageSource';
import { app } from "../../App.js";

const Leaderboard = (props) => {
    const scores = getScores();
    return (
            <ScrollView horizontal={true} contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-end',
            }}>
                <View style={styles.container, { flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={100} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="James" score={88} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Tim" score={66} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Jenna" score={8} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Shawn" score={23} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Liz" score={18} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Sam" score={92} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Tom" score={107} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Mick" score={159} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Hannah" score={86} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Layla" score={66} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Smith" score={25} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Harry" score={35} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Jordy" score={98} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Tee" score={12} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Manda" score={42} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Beth" score={46} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Lily" score={123} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Joy" score={172} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Summer" score={95} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Daisy" score={44} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Thomas" score={85} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Fallon" score={192} />
                    </View>

                </View>
            </ScrollView>
    )
}

export default Leaderboard;

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})

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