/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

// make a component

const SingleButton = ({onPress}) => {

    const {buttonStyle, buttonTitleStyle} = styles;

    return (
        <TouchableOpacity
            style={buttonStyle}
            onPress={onPress}>
            <Text style={buttonTitleStyle}
            >
                Click Me!!!
            </Text>
        </TouchableOpacity>
    );
};
// styling the component
const styles = {
    buttonTitleStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5

    }
}

// make component global
export default SingleButton;