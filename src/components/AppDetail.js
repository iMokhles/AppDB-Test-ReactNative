/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries
import React from 'react';
import {View, Text, Image} from 'react-native';
import AppCard from './AppCard';
import AppCardSection from './AppCardSection'
import SingleButton from './SingleButton'


// make a component
const AppDetail = ({ app })  => {

    const {
        name,
        bundle_id,
        image
    } = app;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTitleStyle,
        headerSubTitleStyle,
        appArtStyle
    } = styles;

    return (
        <AppCard>
            <AppCardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: image}} />
                    <Text
                        numberOfLines={2}
                        style={headerTitleStyle}>
                        {name}</Text>
                    <Text
                        numberOfLines={2}
                        style={headerSubTitleStyle}>
                        {bundle_id}</Text>
                </View>
            </AppCardSection>
        </AppCard>
    );

};

// styling the component
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTitleStyle: {
        marginTop: 5,
        fontSize: 10,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerSubTitleStyle: {
        marginTop: 5,
        fontSize: 8,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailStyle: {
        borderRadius: 14,
        marginTop: -20,
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        marginTop: 5,
        width: 60,
        height: 110,
        marginRight: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 0
    },
    appArtStyle: {
        height: 300,
        width: null,
        flex: 1
    }
}

// make component global
export default AppDetail;