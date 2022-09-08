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

async function accessUserPermissions(id) {
    const docRef = doc(getFirestore(app), "users", id);
    const docSnap = await getDoc(docRef);
    return docSnap;

}

export let account;

async function authenticate(email, password) {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        account = userCredential;
        console.log(userCredential);
        localStorage.setItem('loggedIn', true);
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode + " " + errorMessage);
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