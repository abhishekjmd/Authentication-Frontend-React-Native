/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Custominput from '../../components/CustomInput/custominput';
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialsignIn from '../../components/SocialsignIn/SocialsignIn';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {

    const [code, setCode] = useState('');
    const [Newpassword, setNewpassword] = useState('');
    const navigation = useNavigation();
    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };
    const signIn = () => {
        navigation.navigate('SignIn');
    };
    return (
        <ScrollView>
            <View style={styles.main} >
                <Text style={styles.title}> Reset your Password </Text>

                <Custominput
                    placeholder="Code"
                    value={code}
                    setValue={setCode}
                    SecureTextEntry={false}
                />
                <Custominput
                    placeholder="Enter new password"
                    value={Newpassword}
                    setValue={setNewpassword}
                    SecureTextEntry={false}
                />
                <CustomButton
                    text="Submit"
                    onpress={onSubmitPressed}
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
export default NewPasswordScreen;
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