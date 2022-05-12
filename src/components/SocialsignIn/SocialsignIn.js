/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

const SocialsignIn = () => {

    const signInFacebook = () => {
        console.warn('Facebook Pressed')
    };
    const signInGoogle = () => {
        console.warn('Google Pressed')
    };
    const signInApple = () => {
        console.warn('Apple Pressed')
    };

    return (
        <>
            <CustomButton
                text="Sign In with Facebook"
                onpress={signInFacebook}
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
            <CustomButton
                text="Sign In with Google"
                onpress={signInGoogle}
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
            <CustomButton
                text="Sign In with Apple"
                onpress={signInApple}
                bgColor="#e3e3e3"
                fgColor="#363636"
            />

        </>
    );
}
export default SocialsignIn;
