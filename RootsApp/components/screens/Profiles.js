import React from 'react'
import { StyleSheet, View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';


const Profile = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.contentContainer} >
                <View style={styles.tree}>
                    <View style={styles.leaves}></View>
                    <View style={styles.trunk(props.score)}></View>
                </View>
                <View style={styles.profile}>
                    <Text>User: {props.name}</Text>
                    <Text>Score: {props.score}</Text>
                </View>
            </View>

        </View>


    )
}

export default Profile;

const styles = StyleSheet.create({
    contentContainer:{
        bottom: 0,
    },
    profile: {
        textAlign: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        height: 75,
    },
    main: {

    },
    leaves: {
        backgroundColor: '#388414',
        borderRadius: 5,
        marginRight: 10,
        marginLeft: 10,
        height: 30,
    },
    trunk: (height) => {
        const trunkheight = height;
        return {
            backgroundColor: '#B5641A',
            marginRight: 50,
            marginLeft: 50,
            height: trunkheight,
        }

    }

})



