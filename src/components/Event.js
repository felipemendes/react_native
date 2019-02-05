import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const width = Dimensions.get('screen').width;

type Props = {};
export default class Event extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            event: this.props.event
        };
    }

    render() {
        const { event } = this.state;
        
        return (
            <View key={event.title} style={styles.cell}>
                <Image source={{ uri: event.image }} style={styles.image} />
                <View style={styles.footer}>
                    <Text numberOfLines={2} style={styles.title}>{event.title}</Text>
                </View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cell: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    image: {
        width: '100%',
        height: width / 1.5,
        borderRadius: 10
    },
    footer: {
        position: 'absolute',
        bottom: '0%',
        width: '100%',
        height: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5
    },
    title: {
        padding: 8,
        fontSize: 15,
        fontWeight: '700',
        color: 'white'
    }
});
