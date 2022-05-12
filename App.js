/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SigninScreen from './src/screens/SigninScreen/signinScreen';
import SignupScreen from './src/screens/SignupScreen';
import ConfirmScreen from './src/screens/confirm/confirmScreen';
import ForgetPasswordScreen from './src/screens/ForgetPassword/forgetPassword';
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPassword';
import Navigation from './src/navigation/index';
const App = () => {
  return (
    <View style={styles.root} >
      {/* <SigninScreen /> */}
      {/* <SignupScreen /> */}
      {/* <ConfirmScreen /> */}
      {/* <ForgetPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: '#F9FBFC',
  }
});
