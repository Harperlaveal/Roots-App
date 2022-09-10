import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Leaderboard from './Leaderboard';


export default function Community({ navigation }) {
    return (

        <View style={styles.background}>
            <View style={styles.LeaderboardContainer}>
                <Leaderboard></Leaderboard>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    background: {
        flex: 1,
        backgroundColor: "bone"
        
    },
    title: {
        alignItems: 'center'
    },
    titleText: {
        padding: 20,
        fontSize: 40,
        fontWeight: "bold"
    },
    LeaderboardContainer: {
        position: 'absolute',
        bottom: 0,
    }

})