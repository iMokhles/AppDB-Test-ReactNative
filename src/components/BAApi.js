/**
 * Created by imokhles on 23/02/2017.
 */

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';

import Constant from './Constants';

export default class BAApi extends Component {

    // constructor() {
    //     //...
    // }
    static  fetchLatestApps() {
        return axios.get(Constant.getLatestAppsUrl());
    }

    static fetchPopularApps() {
        return axios.get(Constant.getMostPopularAppsUrl());
    }

    static fetchCydiaApps() {
        return axios.get(Constant.getCydiaAppsUrl());
    }

    static fetchRandomApps() {
        return axios.get(Constant.getRandomAppsUrl());
    }
}
