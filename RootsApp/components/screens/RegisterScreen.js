import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../Background'
import Logo from '../Logo'
import Header from '../Header'
import Button from '../Button'
import TextInput from '../TextInput'
import BackButton from '../BackButton'
import { theme } from '../theme'
import { app } from "../../App.js";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";


export default function RegisterScreen({ navigation }) {
  // Saves variables as states
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Creates new user with an email and password
  const onSignUpPressed = (async() => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // User created and signed in
        localStorage.setItem("currentUserID", userCredential.user.uid);
        // Creates new user with given data
        await setDoc(doc(getFirestore(app), "users", userCredential.user.uid), {
            email: email,
            first_name : firstName,
            last_name: lastName,
            total_points: 0,
            username: username
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + " " + errorMessage);
    })
    navigation.reset({
      index: 0,
      routes: [{ name: 'StartScreen' }],
    })
  })


  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="First Name"
        returnKeyType="next"
        value={firstName.value}
        onChangeText={(text) => setFirstName(text)}
        error={!!firstName.error}
        errorText={firstName.error}
      />
        <TextInput
        label="Last Name"
        returnKeyType="next"
        value={lastName.value}
        onChangeText={(text) => setLastName(text)}
        error={!!lastName.error}
        errorText={lastName.error}
      />
        <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={(text) => setUsername(text)}
        error={!!username.error}
        errorText={username.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})