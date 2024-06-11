/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
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
    <>
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
    </>
  );
};

export default SocialSignInButtons;
