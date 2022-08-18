import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Leaderboard from './Leaderboard';
import Profiles from './Profiles';


export default function Community({ navigation }) {
    return (

        <View style={styles.background}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Title</Text>
            </View>
            <View style={styles.profiles}>
                <ScrollView horizontal={true} contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'flex-end',
      }}>
                    <View style={styles.container, { flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <View>
                            <Profiles name="Eddy" score={100} />
                        </View>
                        <View>
                            <Profiles name="Eddy" score={12} />
                        </View>
                        <View>
                            <Profiles name="Eddy" score={55} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
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
        backgroundColor: "lightgreen"
    },
    title: {
        alignItems: 'center'
    },
    titleText: {
        padding: 20,
        fontSize: 40,
        fontWeight: "bold"
    },
    profiles: {
        
        position: 'absolute',
        bottom: 0,
        flex: 2,
    }

})