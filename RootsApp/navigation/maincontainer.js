import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import MapScreen from '../components/screens/MapScreen';
import Community from '../components/screens/Community';
import AccountScreen from '../components/screens/AccountScreen';

//Screen names
const mapName = "Map";
const leaderBoard = "Community";
const accountName = "Account";

const Tab = createBottomTabNavigator();

function MainContainer() {
  //The code below covers the bottom navigation bar and how it switches between screens.
  return (
    <NavigationContainer>
      <Tab.Navigator
      //Always start app on Map
        initialRouteName={mapName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            //Setting the icons for the Bottom UI
            if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';

            } else if (rn === leaderBoard) {
              iconName = focused ? 'person-sharp' : 'ios-person-outline';

            } else if (rn === accountName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Ionicons name={iconName} size={28} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'grey',
          labelStyle: { fontSize: 15},
        }}>

        {/*Setting the screens for the bottom nav bar*/}
        <Tab.Screen name={mapName} component={MapScreen} />
        <Tab.Screen name={leaderBoard} component={Community} />
        <Tab.Screen name={accountName} component={AccountScreen} />

      </Tab.Navigator>   
    </NavigationContainer>

  );
}

export default MainContainer;