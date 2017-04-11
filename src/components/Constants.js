/**
 * Created by imokhles on 23/02/2017.
 */

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

// base api url
let API_BASE_URL= 'https://appdb.cc/API/v1.2/';

// api latest apps
let SEARCH_IOS_ROUTE= '?action=search&type=ios';

// api popular apps
let POPULAR_IOS_ROUTE= '?action=search&type=ios&order=clicks_week&page=3';

// api cydia apps
let CYDIA_IOS_ROUTE= '?action=search&type=cydia';

// api random apps
let RANDOM_IOS_ROUTE= '?action=search&type=ios&order=clicks_year&page=1';

export default class Constant extends Component {

    static getLatestAppsUrl() {
        return API_BASE_URL+SEARCH_IOS_ROUTE;
    }

    static getMostPopularAppsUrl() {
        return API_BASE_URL+POPULAR_IOS_ROUTE;
    }

    static getCydiaAppsUrl() {
        return API_BASE_URL+CYDIA_IOS_ROUTE;
    }

    static getRandomAppsUrl() {
        return API_BASE_URL+RANDOM_IOS_ROUTE;
    }
}