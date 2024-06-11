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
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('Confirm');
  };

  const onResend = () => {
    console.warn('Resend Codd');
  };

  const onSignInPressed = () => {
    console.warn('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>

      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />

      <CustomButton text="Send" onPress={onSendPressed} />

      <CustomButton
        text="Back to Sign In"
        onPress={onSignInPressed}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051c60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ForgotPasswordScreen;
