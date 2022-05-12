/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/CustomInput/custominput';
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialsignIn from '../../components/SocialsignIn/SocialsignIn';
import { useNavigation } from '@react-navigation/native';
const ConfirmScreen = () => {

    const [code, setCode] = useState('');
    const navigation = useNavigation();
    const confirmYourCode = () => {
        navigation.navigate('Home');
    };
    const signUp = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView>
            <View style={styles.main} >
                <Text style={styles.title}> Conform your Email </Text>

                <Custominput
                    placeholder="Enter your confirmation code"
                    value={code}
                    setValue={setCode}
                    SecureTextEntry={false}
                />
                <CustomButton
                    text="Confirm"
                    onpress={confirmYourCode}
                    type="Primary"
                />
                <CustomButton
                    text="Resend code"
                    onpress={signUp}
                    type="Secondary"
                />
                <CustomButton
                    text="Back to Sign In"
                    onpress={signUp}
                    type="Tertiary"
                />

            </View>
        </ScrollView>
    );
}
export default ConfirmScreen;
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