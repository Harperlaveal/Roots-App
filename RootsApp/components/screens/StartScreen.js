import React from 'react'
import Background from '../Background'
import Logo from '../Logo'
import Header from '../Header'
import Button from '../Button'
import Paragraph from '../Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Roots</Header>
      <Paragraph>

      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  )
}