/* eslint-disable prettier/prettier */
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
      console.warn("Sign In");
  }


  return (
    <View style={[styles.root, {height: height * 0.3}]}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />


      <CustomButton text="Sign in" onPress={onSignInPressed}/>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SigninScreen;
