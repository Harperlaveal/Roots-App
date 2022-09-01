import * as React from 'react';
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';

export default function AccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }} style={styles.image} />
            <Text style={styles.text}>
                Username
            </Text>
            <Text style={styles.text}>
                Points
            </Text>
            <View style={buttonStyles.container}>
                <Button title="Log In" onPress={() => Alert.alert("Logged Out")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 50,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden',
        borderWidth: 5,
        borderColor: 'black'
    }
    
})

const buttonStyles = StyleSheet.create({
    container: {
        left: 10,
        right: 10,
        position: 'absolute',
        bottom: 1
    }

})