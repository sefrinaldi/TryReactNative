import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ListHistory } from '../../components';
import { dummyPesanans } from '../../data';
import { colors } from '../../utils';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesanans: dummyPesanans
        }
    }
    render() {
        const { pesanans } = this.state
        return (
            <View style={styles.pages}>
                <ListHistory pesanans={pesanans}/>
            </View>
        );
    }
}

export default History;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white
    }
})
