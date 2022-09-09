import * as React from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth";
import { doc, getDoc, getDocs, setDoc, collection, getFirestore } from "firebase/firestore";
import {StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity } from 'react-native';
import { account } from "./LoginScreen.js";
import { app } from "../../App.js";
import { render } from 'react-dom';

class Test extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { user : null };
    }
}

async function getUsername() {
    let username;
    let object;
    let item = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = collection(db, 'users');
    await getDocs(docRef).then((snap) => {
        snap.forEach((doc) => {
        if (doc.id == item){
            object = doc.data();
            username = object.username;
        }
        });
    });
    return username;
}

async function getPoints() {
    let points;
    let object;
    let item = localStorage.getItem("currentUserID");
    const db = getFirestore(app);
    const docRef = collection(db, 'users');
    await getDocs(docRef).then((snap) => {
        snap.forEach((doc) => {
        if (doc.id == item){
            object = doc.data();
            points = object.total_points;
        }
        });
    });
    return points;
}

function logout(){
    const auth = getAuth(app);
    auth.signOut();
    Alert.alert("Signed Out");
}

export default async function AccountScreen({ navigation }) {
    let username = await getUsername();
    let points = await getPoints();
    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://www.w3schools.com/howto/img_avatar.png" }} style={styles.image} />
            <Text style={styles.text}>
                {JSON.stringify(username)}
            </Text>
            <Text style={styles.text}>
                {JSON.stringify(points)}
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
