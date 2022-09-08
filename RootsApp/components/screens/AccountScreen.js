import * as React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { app } from "../../App.js";

async function accessUserPermissions(id) {
    const docRef = doc(getFirestore(app), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap;
}

export default function AccountScreen({ navigation }) {
    const docSnap = accessUserPermissions("/IPAr8eYLXGYlc4KJnPupuoYTRl03");
        if (docSnap.exists) {
            console.log('Document data:', docSnap.data());
          } else {
            alert("No such document!");
          }
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
                <Button title="Log Out" onPress={() => Alert.alert("Logged Out")} />
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