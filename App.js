import React, { Component } from 'react';
import { Platform, StyleSheet, FlatList } from 'react-native';
import Event from './src/components/Event';

type Props = {};
export default class App extends Component<Props> {

    constructor() {
        super();
        this.state = {
            events: []
        };
    }

    componentDidMount() {
        fetch('https://api.myjson.com/bins/12fzng')
            .then(res => res.json())
            .then(json => this.setState({ events: json }));
    }

    render() {
        return (
            <FlatList 
                style={styles.container}
                keyExtractor={item => item.title}
                data={this.state.events}
                renderItem={({ item }) =>
                    <Event event={item} />
                }
            />
        );
    }
}

const statusBar = Platform.OS === 'ios' ? 20 : 0;
const styles = StyleSheet.create({
    container: {
        marginTop: statusBar,
        backgroundColor: 'rgb(11, 11, 11)'
    }
});
