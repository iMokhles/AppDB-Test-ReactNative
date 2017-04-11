/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries
import React from 'react';
import {View} from 'react-native';

// make a component
const AppCard = (props)  => {


    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

// styling the component
const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

// make component global
export default AppCard;
