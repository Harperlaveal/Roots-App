import React, { useState, useEffect } from 'react';
import { getAuth} from "firebase/auth";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import {StyleSheet, View, Text, Image, Button, Alert } from 'react-native';
import { app } from "../../App.js";

// Gets current user username
async function getUsername() {
    let username;
    let object;
    // Gets current user UID
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // returns user data from firebase
        object = docSnap.data();
        username = object.username;
      } else {
        alert("No such document!");
      }

    return username;
}

//Gets current user points
async function getPoints() {
    let points;
    let object;
    // Gets current user UID
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // returns user data from firebase
        object = docSnap.data();
        points = object.total_points;
    } else {
        alert("No such document!");
    }
    return points;
}
//Gets current user first name
async function getFirstName() {
    let firstname;
    let object;
    // Gets current user UID
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // returns user data from firebase
        object = docSnap.data();
        firstname = object.first_name;
    } else {
        alert("No such document!");
    }
    return firstname;
}

//Gets current user last name
async function getLastName() {
    let lastName;
    let object;
    // Gets current user UID
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        // returns user data from firebase
        object = docSnap.data();
        lastName = object.last_name;
    } else {
        alert("No such document!");
    }
    return lastName;
}

// Logs user out
function logout(){
    const auth = getAuth(app);
    // Signs current user out
    auth.signOut();
    localStorage.clear();
    Alert.alert("Signed Out");
}

// Main Account Screen
export default function AccountScreen({ navigation }) {
    // Initialise States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [points, setPoints] = useState(0);

    useEffect(() => { // load data when component first mounts
        async function setData() {
            try {
                // Sets states for username and points
                setFirstName(await getFirstName());
                setLastName(await getLastName());
                setUsername(await getUsername());
                setPoints(await getPoints());

            } catch (error) {
                console.log(error);
            }
        }
        setData();
    })

    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }} style={styles.image} />
            <Text style={styles.text}>
                {firstName} {lastName}
            </Text>
            <Text style={styles.textUser}>
                {username}
            </Text>
            <Text style={styles.textUser}>
                {"Points:"} {points}
            </Text>
            <View style={buttonStyles.container}>
                <Button title="Log Out" onPress={() => logout()}/>
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
        fontSize: 45,
        fontWeight: 'bold'
    },
    textUser: {
        fontSize: 25,
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
