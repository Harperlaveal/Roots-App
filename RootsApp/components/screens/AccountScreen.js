import React, { useState, useEffect } from 'react';
import { getAuth} from "firebase/auth";
import { getDoc, doc, collection, getFirestore } from "firebase/firestore";
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { app } from "../../App.js";

async function getUsername() {
    let username;
    let object;
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        object = docSnap.data();
        username = object.username;
        console.log("username : " + username);
        
      } else {
        alert("No such document!");
      }

    return username;
}

async function getPoints() {
    let points;
    let object;
    let id = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        object = docSnap.data();
        points = object.total_points;
        console.log("points : " + points);

    } else {
        alert("No such document!");
    }
    return points;
}

function logout(){
    const auth = getAuth(app);
    auth.signOut();
    Alert.alert("Signed Out");
}

export default function AccountScreen({ navigation }) {
    const [username, setUsername] = useState("");
    const [points, setPoints] = useState(0);

    useEffect(() => { // load data when component first mounts
        async function setData() {
            try {
                console.log("setting user data");
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
                {username}
            </Text>
            <Text style={styles.text}>
                {points}
            </Text>
            <View style={buttonStyles.container}>
                <Button title="Log Out" onPress={() => 
                    logout()
                }/>
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
