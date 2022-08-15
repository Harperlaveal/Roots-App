import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Community({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.text}>Community</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
    
})