/**
 * Created by imokhles on 23/02/2017.
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from './src/components/header'
import HomeList from './src/components/HomeList'


const App = () => (
    <View style={{ flex: 1}}>
        <Header headerText="Home!" />
        <HomeList />
    </View>


);

AppRegistry.registerComponent('EaalMasry', () => App);