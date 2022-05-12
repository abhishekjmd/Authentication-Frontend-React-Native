/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onpress, text, type = "Primary", bgColor, fgColor }) => {
    return (
        <Pressable
            onPress={onpress}
            style={[styles.container, styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}
            ]}>
            <Text style={[styles.text, styles[`text_${type}`],
            fgColor ? { color: fgColor } : {}
            ]}>{text} </Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        top: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 5,
    },
    container_Primary: {
        backgroundColor: '#3B71F3',
    },
    container_Secondary: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },
    container_Tertiary: {
        // backgroundColor: '#3B71F3',
    },

    text: {
        color: 'white',
    },
    text_Primary: {
        fontWeight: 'bold',
    },
    text_Secondary: {
        color: '#3B71F3',
    },
    text_Tertiary: {
        color: 'gray',
        // fontWeight: '500',
    }
})