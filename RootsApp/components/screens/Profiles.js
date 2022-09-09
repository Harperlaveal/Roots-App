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
                    <View style ={styles.textBox}>
                        <Text>User: {props.name}</Text>
                        <Text>Score: {props.score}</Text>
                    </View>

                </View>
            </View>

        </View>


    )
}

export default Profile;

const styles = StyleSheet.create({
    contentContainer: {
        bottom: 0,
    },
    profile: {
        borderRadius: 100,
        marginRight: 10,
        marginLeft: 10,
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c6edb2',
        borderRadius: 5,
        height: 50,
    },
    textBox: {
        textAlign: 'center',
        backgroundColor: '#c6edb2',
        borderRadius: 5,
        height: 50,
    },

    leaves: {
        backgroundColor: '#388414',
        borderRadius: 50,
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
            width: 20,
            height: trunkheight * 2.5,
        }

    }

})



