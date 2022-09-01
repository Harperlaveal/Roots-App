import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';


export default function MapScreen()  {

    return (
       //Need to suss custom images out.
    <View style ={styles.container}>
        <MapView style={styles.map}
        initialRegion={{ 
            latitude: -41.276825, 
            longitude: 174.777969, 
            latitudeDelta: 0.03, 
            longitudeDelta: 0.03 
        }}
        > 
        <Marker
            coordinate={{latitude: -41.27516,
            longitude: 174.76680}}
            title={"Tree Planting 101"}
            description={"Click to sign-up"}
        />
        <Marker
            coordinate={{latitude: -41.29838,
            longitude: 174.75219}}
            pinColor = {"green"}
            title={"Tree Planting 201"}
            description={"Click to sign-up"}
        />
        <Marker
            coordinate={{latitude: -41.29042,
            longitude: 174.79066}}
            pinColor = {"red"}
            title={"Oriental Bay Rubbish Pick up "}
            description={"Click to sign-up"}
        />
         <Marker
            coordinate={{latitude: -41.33006,
            longitude: 174.79410}}
            pinColor = {"red"}
            title={"Lyall Bay Clean up"}
            description={"Click to sign-up"}
        />
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