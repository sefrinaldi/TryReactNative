import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CardJersey } from '../../kecil';


class ListJerseys extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { jerseys } = this.props
        return (
            <View style={styles.container}>
                {jerseys.map(jersey => {
                    return (
                        <CardJersey key={jersey.id} jersey={jersey}/>
                    )
                })}
            </View>
        );
    }
}

export default ListJerseys;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    }
})
