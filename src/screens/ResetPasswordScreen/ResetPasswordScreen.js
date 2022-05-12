/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/CustomInput/custominput';
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialsignIn from '../../components/SocialsignIn/SocialsignIn';
import { useNavigation } from '@react-navigation/native';
const ForgetPasswordScreen = () => {

    const [username, setUsername] = useState('');
    const navigation = useNavigation();
    const onSendPressed = () => {
        console.warn('Confirm pressed')
        navigation.navigate('NewPassword');
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
                <Text style={styles.title}> Reset your Password </Text>

                <Custominput
                    placeholder="Username"
                    value={username}
                    setValue={setUsername}
                    SecureTextEntry={false}
                />
                <CustomButton
                    text="Send"
                    onpress={onSendPressed}
                    type="Primary"
                />
                <CustomButton
                    text="Back to Sign In"
                    onpress={signIn}
                    type="Tertiary"
                />

            </View>
        </ScrollView>
    );
};
export default ForgetPasswordScreen;
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
})