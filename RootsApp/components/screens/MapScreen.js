import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function MapScreen()  {

    
    return (
        //Starts in NZ now
        //Need to workout how to start zoomed into wellington because
        //it wasn't working for some reason.
    <View style ={styles.container}>
        <MapView
            style={styles.map}> 
        </MapView>
    </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
})