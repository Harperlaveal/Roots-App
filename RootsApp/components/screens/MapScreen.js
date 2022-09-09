import * as React from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight, Button, Alert} from 'react-native';

async function onSignupPress() {
    
}


export default function MapScreen()  {

    return (
    <View style ={styles.container}>
        <MapView style={styles.map}
        //I have set the intialRegion to Wellington's latitude and longitude so that when the app is opened
        // it automatically zooms into Wellington and its surronding areas.
        initialRegion={{ 
            latitude: -41.276825, 
            longitude: 174.777969, 
            latitudeDelta: 0.03, 
            longitudeDelta: 0.03 
        }}
        >
            {/*Below each Marker represents an event which is on the MapScreen */} 
        <Marker
            coordinate={{latitude: -41.27516,
            longitude: 174.76680}}
            pinColor = {"green"}
            title={"Tree Planting 101"}
            description={"Click to sign-up"}>
                  <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Tree Planting 101"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
            </Marker>

        
        <Marker
            coordinate={{latitude: -41.29838,
            longitude: 174.75219}}
            pinColor = {"green"}
            title={"Tree Planting 201"}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Tree Planting 201"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
            </Marker>
        
        <Marker
            coordinate={{latitude: -41.29042,
            longitude: 174.79066}}
            pinColor = {"red"}
            title={"Oriental Bay Rubbish Pick up "}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Oriental Bay Clean up"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
            </Marker>
        
         <Marker
            coordinate={{latitude: -41.33006,
            longitude: 174.79410}}
            pinColor = {"red"}
            title={"Lyall Bay Clean up"}
            description={"Click to sign-up"}>
                <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Lyall Bay Clean up"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
            </Marker>

            <Marker
            coordinate={{latitude: -41.28317,
                longitude: 174.76444}}
                pinColor = {"green"}
                title={"Botanic Garden Trail Restoration"}
                description={"Click to sign-up"}>
                    <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Botanic Garden Trail Restoration"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
                </Marker>

                <Marker
            coordinate={{latitude: -41.29793,
                longitude: 174.79134}}
                pinColor = {"green"}
                title={"Mt Victoria Trail Restoration"}
                description={"Click to sign-up"}>
                    <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Mt Victoria Trail Restoration"}{"\n"}{"Click to sign up"}</Text>
                        </View>
                </MapView.Callout>
                </Marker>

                <Marker
            coordinate={{latitude: -41.30555,
                longitude: 174.77094}}
                pinColor = {"green"}
                title={"Brooklyn "}
                description={"Click to sign-up"}>
                    <MapView.Callout tooltip style={styles.customView} onPress= {()=>Alert.alert("Signed Up!")}>
                        <View style={styles.calloutText}>
                            <Text>{"Brooklyn Tree Planting"}{"\n"}{"Click to sign up"}</Text>
                        </View>
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
        //This sets the map to cover the whole window screen. 
        //The maincontainer overlays the map so that bottom nav bar is always seen.
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