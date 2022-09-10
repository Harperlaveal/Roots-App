import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../App.js";
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../theme.js'
import Background from '../Background'
import Logo from '../Logo'
import Header from '../Header'
import Button from '../Button'
import TextInput from '../TextInput'
import BackButton from '../BackButton'

let attempts = 0;

async function accessUserTable(id) { // access user table in firebase firestore database
    const docRef = doc(getFirestore(app), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap;
}

async function authenticate(email, password) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        console.log(userCredential.user.uid);
        localStorage.setItem('currentUserID', userCredential.user.uid); // save the uid of the current logged in user
        const docSnap = await accessUserTable(userCredential.user.uid); // get document from the user table
        if (docSnap.exists()){
            attempts = 0;
            console.log("total points : " + docSnap.data().total_points); // printing points for testingc 
          } else {
            alert("No such document!");
          }
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/invalid-email" || errorCode == "auth/wrong-password"){ // checks if email or password is correct
          attempts = attempts + 1;
          if (attempts >= 5){ // if there are too many failed attempts clear local storage
            localStorage.clear();
          }
          alert("Invalid Email or Password");
        } else {
          alert(errorCode + " " + errorMessage);
        }
    });
}

function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({ value: '', error: '' });
    const [password, setPassword] = useState({ value: '', error: '' });

    navigation.reset({
        index: 0,
        routes: [{ name: 'Dashboard' }],
      })

    return (
        <Background>
        <BackButton goBack={navigation.goBack} />
        <Logo />
        <Header>Roots</Header>
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
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
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <View style={styles.forgotPassword}>
          <TouchableOpacity
             onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <Button mode="contained" onPress={() => authenticate(email.value, password.value)}>
          Login
        </Button>
        <View style={styles.row}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Background>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
  })