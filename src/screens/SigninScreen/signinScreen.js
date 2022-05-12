/* eslint-disable prettier/prettier */
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/CustomInput/custominput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialsignIn from '../../components/SocialsignIn/SocialsignIn';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
const SigninScreen = () => {
    const { height } = useWindowDimensions();
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const navigation = useNavigation();
    const { control, handleSubmit, formState: {errors} } = useForm();

    
    const signInPressed = Data => {
        console.log(Data);
        navigation.navigate('Home');

    };

    const ForgetPasswordPressed = () => {
        navigation.navigate('ForgetPassword');
    };
    const signUp = () => {
        navigation.navigate('SignUp')
    };
    return (
        <ScrollView>
            <View style={styles.main} >
                <Image source={require('../../../images/Daco_4338596.png')} style={[styles.Logo, { height: height * 0.3 }]} />

                <Custominput
                    name="username"
                    control={control}
                    rules={{require: true}}
                    placeholder="Username"
                    SecureTextEntry={false}
                />
                <Custominput
                    placeholder="Password"
                    name="password"
                    control={control}
                    SecureTextEntry={true}
                />
                <CustomButton
                    text="Sign in"
                    onpress={handleSubmit(signInPressed)}
                    type="Primary"
                />
                <CustomButton
                    text="Forgot Password ?"
                    onpress={ForgetPasswordPressed}
                    type="Tertiary"
                />
                <SocialsignIn />
                <CustomButton
                    text="Don't have an account? create one "
                    onpress={signUp}
                    type="Tertiary"
                />

            </View>
        </ScrollView>
    );
};
export default SigninScreen;
const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        padding: 20,
    },
    Logo: {

        width: '70%',
        maxWidth: 500,
        height: 200,
    },
})