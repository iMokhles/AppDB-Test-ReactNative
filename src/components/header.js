/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries

import React from 'react';
import { Text, View } from 'react-native';

// make a component

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return  (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>

    );
};

// styling the component
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

// make component global
export  default Header;
