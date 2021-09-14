import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { CardAlamat } from '../../components';
import { colors, fonts } from '../../utils'
import { dummyPesanans, dummyProfile } from '../../data'
import { numberWithCommas } from '../../utils'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: dummyProfile,
            carts: dummyPesanans[0]
        }
    }
    render() {
        const { profile, carts } = this.state
        return (
            <View style={styles.pages}>
                <View style={styles.textView}>
                    <Text style={styles.textBold}>Apakah benar alamat ini?</Text>
                    <CardAlamat profile={profile}/>

                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(carts.totalHarga)}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Checkout;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 30
    },
    textView: {
        paddingHorizontal: 30
    },
    textBold: {
        fontSize: 18,
        fontFamily: fonts.primary.bold
    },
    totalHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    }
})
