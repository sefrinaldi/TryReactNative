import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';

class CardLiga extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { ligas } = this.props
        return (
            <TouchableOpacity style={styles.container}>
                <Image source={ligas.picture} style={styles.logo} />
            </TouchableOpacity>
        );
    }
}

export default CardLiga

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        padding: 10,
        borderRadius: 15
    },
    logo: {
        width: responsiveWidth(57),
        height: responsiveHeight(70),
    }
})
