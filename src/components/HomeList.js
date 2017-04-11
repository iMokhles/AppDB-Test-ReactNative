/**
 * Created by imokhles on 23/02/2017.
 */

/**
 * Created by imokhles on 23/02/2017.
 */

// import libraries

import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import AppDetail from './AppDetail';

// import Constant from './Constants';
import BAApi from './BAApi';

// make a class

class HomeList extends Component {


    // latest
    // clicks_week
    // cydia
    // clicks_year

    state = { latestApps: [], mostPopularApps: [], cydiaApps: [], randomApps: [] };

    componentWillMount() {

        BAApi.fetchLatestApps()
            .then(response => this.setState( { latestApps: response.data['data']}));

        BAApi.fetchPopularApps()
            .then(response => this.setState( { mostPopularApps: response.data['data']}));
        //
        BAApi.fetchCydiaApps()
            .then(response => this.setState( { cydiaApps: response.data['data']}));

        BAApi.fetchRandomApps()
            .then(response => this.setState( { randomApps: response.data['data']}));

    }

    renderLatestApps() {
        return this.state.latestApps.map(
            app => <AppDetail key={app.name} app={app} />
        );
    }

    renderPopularApps() {
        return this.state.mostPopularApps.map(
            app => <AppDetail key={app.name} app={app} />
        );
    }

    renderCydiaApps() {
        return this.state.cydiaApps.map(
            app => <AppDetail key={app.name} app={app} />
        );
    }

    renderRandomApps() {
        return this.state.randomApps.map(
            app => <AppDetail key={app.name} app={app} />
        );
    }
    render() {
        console.log(this.state.latestApps);
        if (this.state.latestApps.length > 0) {
            console.log(this.state.latestApps[0].image);

            return (
                <ScrollView>
                    <Text> Latest Apps </Text>
                    <ScrollView horizontal={true}>
                        {
                            this.renderLatestApps()
                        }
                    </ScrollView>

                    <Text> Popular Apps </Text>
                    <ScrollView horizontal={true}>
                        {
                            this.renderPopularApps()
                        }
                    </ScrollView>

                    <Text> Cydia Apps </Text>
                    <ScrollView horizontal={true}>
                        {
                            this.renderCydiaApps()
                        }
                    </ScrollView>

                    <Text> Random Apps </Text>
                    <ScrollView horizontal={true}>
                        {
                            this.renderRandomApps()
                        }
                    </ScrollView>
                </ScrollView>

            );
        } else {
            return (
                <ScrollView>

                </ScrollView>
            );
        }
    }
}

// make component global
export  default HomeList;