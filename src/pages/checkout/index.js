import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, CardAlamat, Jarak, Pilihan } from '../../components';
import { colors, fonts } from '../../utils'
import { dummyPesanans, dummyProfile } from '../../data'
import { numberWithCommas, responsiveHeight } from '../../utils'

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: dummyProfile,
            carts: dummyPesanans[0],
            ekspedisi: []
        }
    }
    render() {
        const { profile, carts, ekspedisi } = this.state
        return (
            <View style={styles.pages}>
                <View style={styles.textView}>
                    <Text style={styles.textBold}>Apakah benar alamat ini?</Text>
                    <CardAlamat profile={profile} />

                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(carts.totalHarga)}</Text>
                    </View>

                    <Pilihan label="Pilih Ekspedisi" datas={ekspedisi} />
                    <Jarak height={10} />

                    <Text style={styles.textBold}>Biaya Ongkir :</Text>

                    <View style={styles.ongkir}>
                        <Text style={styles.text}>Biaya Ongkir : {carts.berat} Kg</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(15000)}</Text>
                    </View>

                    <View style={styles.ongkir}>
                        <Text style={styles.text}>Estimasi Waktu</Text>
                        <Text style={styles.textBold}>2 - 3 Hari</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View style={styles.totalHarga}>
                        <Text style={styles.textBold}>Total Harga :</Text>
                        <Text style={styles.textBold}>Rp. {numberWithCommas(carts.totalHarga+15000)}</Text>
                    </View>

                    <Button
                        title="Bayar"
                        type="textIcon"
                        icon="whiteCart"
                        fontSize={18}
                        padding={responsiveHeight(15)}
                        onPress={() => this.props.navigation.navigate('Checkout')}
                    />
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
        paddingTop: 30,
        justifyContent: 'space-between'
    },
    textView: {
        paddingHorizontal: 30
    },
    textBold: {
        fontSize: 18,
        fontFamily: fonts.primary.bold
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary.regular
    },
    totalHarga: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
    },
    ongkir: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
})
