/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import SigninScreen from '../screens/SigninScreen/signinScreen';
import SignupScreen from '../screens/SignupScreen/signupScreen';
import ConfirmScreen from '../screens/confirm/confirmScreen';
import ForgetPasswordScreen from '../screens/ForgetPassword/forgetPassword';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPassword';
import HomeScreen from '../screens/HomeScreen/index';
import ResetPasswordScreen from '../screens/ResetPasswordScreen/ResetPasswordScreen';
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name='SignIn' component={SigninScreen} />
                <Stack.Screen name='SignUp' component={SignupScreen} />
                <Stack.Screen name='Confirm' component={ConfirmScreen} />
                <Stack.Screen name='ForgetPassword' component={ForgetPasswordScreen} />
                <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
                <Stack.Screen name='Home' component=
                    {HomeScreen} />
                <Stack.Screen name='ResetPassword' component=
                    {ResetPasswordScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;