/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../assets/images/Logo_1.png';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

const SigninScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onSignUpPressed = () => {
    console.warn('Sign Up');
  };

  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };

  const onSignInFaceBook = () => {
    console.warn('Sign in With FaceBook');
  };

  const onSignInGoogle = () => {
    console.warn('Sign in With Google');
  };

  const onSignInApple = () => {
    console.warn('Sign in With Apple ID');
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
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

        <CustomButton text="Sign in" onPress={onSignInPressed} />

        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Sign in with FaceBook"
          onPress={onSignInFaceBook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign in with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign in with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an Account? Create One"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
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
