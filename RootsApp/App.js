import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { firebaseConfig } from './firebase.js';
import { initializeApp } from 'firebase/app';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MainContainer from './navigation/maincontainer';
import { theme } from './components/theme.js';
import 'localstorage-polyfill';
import { getAuth } from "firebase/auth";
import LoginScreen from './components/screens/LoginScreen.js';
import StartScreen from './components/screens/StartScreen.js';
import RegisterScreen from './components/screens/RegisterScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen.js';

export const app = initializeApp(firebaseConfig);
const Stack = createStackNavigator();



export default function App({ navigation }) {
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
      return(
      <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
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