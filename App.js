/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, FlatList} from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class App extends Component<Props> {
  render() {

    const events = [
        {id: 1, title: 'Sample Event'},
        {id: 2, title: 'My Awesome Event'},
        {id: 3, title: 'Another Concert'}
    ];

    return (
        <FlatList style={{marginTop: 20, backgroundColor: '#fff'}}
            keyExtractor={item => item.id}
            data={events}
            renderItem={ ({item}) =>
                <View key={item.id}>
                    <Text>{item.title}</Text>
                    <Image source={require('./resources/img/sample-event.jpg')}
                            style={{width: width, height: width}}/>
                </View>
            }
        />
    );
  }
}
