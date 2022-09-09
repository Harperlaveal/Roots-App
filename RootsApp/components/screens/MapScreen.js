import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight, Button, Alert} from 'react-native';


export default function MapScreen()  {

    return (
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
            description={"Click to sign-up"}>
                  <MapView.Callout tooltip style={styles.customView}>
                    <TouchableHighlight onPress= {()=>Alert.alert("Signed Up!")} underlayColor='#dddddd'>
                        <View style={styles.calloutText}>
                            <Text>{"Tree Planting 101"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                    </TouchableHighlight>
                </MapView.Callout>
            </Marker>

        
        <Marker
            coordinate={{latitude: -41.29838,
            longitude: 174.75219}}
            pinColor = {"green"}
            title={"Tree Planting 201"}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView}>
                    <TouchableHighlight onPress= {()=>Alert.alert("Signed Up!")} underlayColor='#dddddd'>
                        <View style={styles.calloutText}>
                            <Text>{"Tree Planting 201"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                    </TouchableHighlight>
                </MapView.Callout>
            </Marker>
        
        <Marker
            coordinate={{latitude: -41.29042,
            longitude: 174.79066}}
            pinColor = {"red"}
            title={"Oriental Bay Rubbish Pick up "}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView}>
                    <TouchableHighlight onPress= {()=>Alert.alert("Signed Up!")} underlayColor='#dddddd'>
                        <View style={styles.calloutText}>
                            <Text>{"Oriental Bay Rubbish Pick up"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                    </TouchableHighlight>
                </MapView.Callout>
            </Marker>
        
         <Marker
            coordinate={{latitude: -41.33006,
            longitude: 174.79410}}
            pinColor = {"red"}
            title={"Lyall Bay Clean up"}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView}>
                    <TouchableHighlight onPress= {()=>Alert.alert("Signed Up!")} underlayColor='#dddddd'>
                        <View style={styles.calloutText}>
                            <Text>{"Lyall Bay Rubbish Pick up"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                    </TouchableHighlight>
                </MapView.Callout>
            </Marker>
        
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
    customView: {
        backgroundColor: '#ffffff',
        margin: 40,
        padding: 10,
        borderRadius: 25,

    },
    calloutText: {

    }
})