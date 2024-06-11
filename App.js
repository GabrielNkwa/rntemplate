/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
// import SigninScreen from './src/screens/SigninScreen';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
// import ForgotPasswordScreen from './src/screens/ForgorPasswordScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NewPasswordScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default App;
