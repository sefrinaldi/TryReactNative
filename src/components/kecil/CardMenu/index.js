import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconArrowRight } from '../../../assets';
import { colors, fonts, responsiveHeight } from '../../../utils';

class CardMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { menu, navigation } = this.props
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={ () => navigation.navigate(menu.page)}
            >
                <View style={styles.menu}>
                    {menu.picture}
                    <Text style={styles.text}>{menu.name}</Text>
                </View>
                <IconArrowRight />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        marginHorizontal: 30,
        padding: responsiveHeight(15),
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        alignItems: 'center'
    },
    menu: {
        flexDirection: 'row'
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 18,
        marginLeft: 20,
    }
})

export default CardMenu
