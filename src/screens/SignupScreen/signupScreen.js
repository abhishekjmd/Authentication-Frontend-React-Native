/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/CustomInput/custominput';
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialsignIn from '../../components/SocialsignIn/SocialsignIn';
import { useNavigation } from '@react-navigation/native';
const SignupScreen = () => {
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [passwordRepeat, setpasswordRepeat] = useState('');
    const navigation = useNavigation();
    const RegisterPressed = () => {
        navigation.navigate('Confirm');
    };
    const signIn = () => {
        navigation.navigate('SignIn');
    };
    const privacyPolicyPressed = () => {
        console.warn('privacy policy pressed');
    };
    const termsOfUse = () => {
        console.warn('terms of use pressed');
    };
    return (
        <ScrollView>
            <View style={styles.main} >
                <Text style={styles.title}> Create an account </Text>

                <Custominput
                    placeholder="Username"
                    value={username}
                    setValue={setusername}
                    SecureTextEntry={false}
                />
                <Custominput
                    placeholder="Email"
                    value={email}
                    setValue={setEmail}
                    SecureTextEntry={false}
                />
                <Custominput
                    placeholder="Password"
                    value={password}
                    setValue={setpassword}
                    SecureTextEntry={true}
                />
                <Custominput
                    placeholder="Repeat Password"
                    value={passwordRepeat}
                    setValue={setpasswordRepeat}
                    SecureTextEntry={true}
                />
                <CustomButton
                    text="Register"
                    onpress={RegisterPressed}
                    type="Primary"
                />
                <Text style={styles.text}>
                    By registering you confirm that you accept our
                    <Text style={styles.link} onPress={termsOfUse} >Terms of Use </Text> and
                    <Text style={styles.link} onPress={privacyPolicyPressed} > Privacy Policy </Text>
                </Text>
               <SocialsignIn />
                <CustomButton
                    text="Have an account? Sign in"
                    onpress={signIn}
                    type="Tertiary"
                />

            </View>
        </ScrollView>
    );
};
export default SignupScreen;
const styles = StyleSheet.create({
    main: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        top: 5,
        color: 'gray',
        marginVertical: 20,
    },
    link: {
        color: '#FDB075',
    },
})