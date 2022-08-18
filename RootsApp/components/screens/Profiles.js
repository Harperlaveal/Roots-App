import React from 'react'
import { StyleSheet, View, Text, Button, Alert, Image, TouchableOpacity } from 'react-native';


const Profile = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.tree}>
                <View style={styles.leaves}></View>
                <View style={styles.trunk(props.score)}></View>
            </View>
            <View style={styles.profile}>
                <View>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                </View>
                <Text>This is the profile of {props.name}</Text>
                <Text>His score is {props.score}</Text>
            </View>
        </View>


    )
}

export default Profile;

const styles = StyleSheet.create({
    profile: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 15,
        height: 75,
    },
    main: {
justifyContent: 'flex-end'
    },
    leaves: {
        backgroundColor: '#388414',
        borderRadius: 5,
        marginRight: 2,
        marginLeft: 2,
        height: 30, 
    },
    trunk: (height) => {
        const trunkheight = height;
        return {
        
            backgroundColor: '#B5641A',
            marginRight: 10,
            marginLeft: 10,
            height: trunkheight,
        }

    }

})



