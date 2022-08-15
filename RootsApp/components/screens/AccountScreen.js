import * as React from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default function AccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={styles.text}>Account</Text>
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