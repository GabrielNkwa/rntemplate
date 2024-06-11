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

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const onConfirmPressed = () => {
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
      <Text style={styles.title}>Confirm Your Email</Text>

      <CustomInput
        placeholder="Enter yourVerification Code"
        value={code}
        setValue={setCode}
      />

      <CustomButton text="Confirm" onPress={onConfirmPressed} />

      <CustomButton
        text="Resend Code"
        onPress={onResend}
        type="SECONDARY"
      />
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

export default ConfirmEmailScreen;
