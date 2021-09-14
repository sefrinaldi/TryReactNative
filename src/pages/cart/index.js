import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, ListCart } from '../../components';
import { dummyPesanans } from '../../data';
import { colors, fonts, numberWithCommas, responsiveHeight } from '../../utils';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carts: dummyPesanans[0]
        }
    }
    render() {
        const { carts } = this.state
        return (
            <View style={styles.page}>
                <ListCart carts={carts.pesanans} />
                <View style={styles.footer}>
                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(carts.totalHarga)}</Text>
                    </View>

                    <Button
                        title="Check out"
                        type="textIcon"
                        icon="whiteCart"
                        fontSize={18}
                        padding={responsiveHeight(15)}
                        onPress={()=> this.props.navigation.navigate('Checkout')}
                    />
                </View>
            </View>
        );
    }
}

export default Cart;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    footer: {
        paddingHorizontal: 30,
        paddingBottom: 30,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 11,
    },
    totalHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    textBold: {
        fontFamily: fonts.primary.bold,
        fontSize: 20,
    }
})
