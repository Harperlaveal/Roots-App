import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './firebase.js';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainContainer from './navigation/maincontainer';
import LoginScreen from './components/screens/LoginScreen.js';
import { theme } from './components/theme.js';
import 'localstorage-polyfill';
import { getAuth } from "firebase/auth";

export const app = initializeApp(firebaseConfig);
const Stack = createStackNavigator();



export default function App() {
    //console.log(app);
    const [session, setSession] = useState(false);
    let state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Do something', done: false},
        {id: 1, title: 'Something Else', done: false}
      ]
    }
    useEffect(() =>  {
      const auth = getAuth(app);
      auth.onAuthStateChanged((user) => {

        if(user) {
          console.log(user.uid);
          setSession(true);
        } else {
          setSession(false);
        }
        
      })
    })

    const statusbar = (Platform.os == 'ios') ? <View style={styles.statusbar}></View> : <View></View>;
    if(session) {
      return (
        <View style={styles.container}>
          <View style={styles.statusbar}></View>
          <MainContainer/>
        </View>
      );
    } else {
      const auth = getAuth(app);
      auth.signOut();
      return(
      <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>)
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    height: 20,
  }
});