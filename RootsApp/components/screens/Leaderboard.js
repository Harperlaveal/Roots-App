import React from 'react'
import Profiles from './Profiles';
import { StyleSheet, View, ScrollView, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';


const Leaderboard = (props) => {
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
                        <Profiles name="Eddy" score={88} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={66} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={8} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={23} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={18} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={92} />
                    </View>
                    <View style={styles.profileContainer}>
                        <Profiles name="Eddy" score={107} />
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