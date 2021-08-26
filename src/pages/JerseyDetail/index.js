import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, CardLiga } from '../../components';
import { colors, fonts, responsiveHeight, heightMobileUI, numberWithCommas } from '../../utils';
import { RFValue } from 'react-native-responsive-fontsize';


class JerseyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jersey: this.props.route.params.jersey,
            image: this.props.route.params.jersey.picture
        }
    }
    render() {
        const { navigation } = this.props
        const { jersey, image } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.button}>
                    <Button
                        icon="arrow-left"
                        padding={7}
                        onPress={() => navigation.goBack()}
                    />
                </View>
                <View style={styles.container}>
                    <View style={styles.liga}>
                        <CardLiga liga={jersey.liga} />
                    </View>
                    <View style={styles.desc}>
                        <Text style={styles.name}>{jersey.name}</Text>
                        <Text style={styles.price}>Harga : Rp. {numberWithCommas(jersey.price)}</Text>

                        <View style={styles.garis}></View>

                        <View style={styles.wrapperTypeWeight}>
                            <Text style={styles.typeWeight}>Jenis : {jersey.type}</Text> 
                            <Text style={styles.typeWeight}>Berat : {jersey.weight} Kg</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(430),
        backgroundColor: colors.white,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    button: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 30
    },
    desc: {
        marginHorizontal: 30
    },
    name: {
        fontFamily: fonts.primary.bold,
        fontSize: RFValue(24, heightMobileUI),
        textTransform: 'capitalize'
    },
    price: {
        fontFamily: fonts.primary.light,
        fontSize: RFValue(24, heightMobileUI)
    },
    liga: {
        alignItems: 'flex-end',
        marginTop: -30,
        marginRight: 30
    },
    garis: {
        borderWidth: 0.5,
        marginVertical: 5
    },
    wrapperTypeWeight: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    typeWeight: {
        fontFamily: fonts.primary.regular,
        fontSize: 13,
        marginRight: 40
    }
})

export default JerseyDetail;