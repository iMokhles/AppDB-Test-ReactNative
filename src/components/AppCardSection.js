/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries
import React from 'react';
import {View} from 'react-native';

// make a component
const AppCardSection = (props)  => {


    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );

};

// styling the component
const styles = {
    containerStyle: {
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}

// make component global
export default AppCardSection;