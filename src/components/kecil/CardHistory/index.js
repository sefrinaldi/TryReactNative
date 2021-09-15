import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Jarak } from '..'
import { colors, fonts, numberWithCommas, responsiveWidth } from '../../../utils'

const CardHistory = ({ pesanan }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.tanggal}>{pesanan.tanggalPemesanan}</Text>
            {pesanan.pesanans.map((history, index) => {
                return (
                    <View key={index} style={styles.history}>
                        <Text style={styles.textBold}>{index + 1}. </Text>
                        <Image style={styles.jersey} source={history.product.picture[0]} />

                        <View style={styles.desc}>
                            <Text style={styles.name}>{history.product.name}</Text>
                            <Text style={styles.price}>Rp. {numberWithCommas(history.product.price)}</Text>

                            <Jarak height={10} />

                            <Text style={styles.textBold}>Pesan : {history.jumlahPesan}</Text>
                            <Text style={styles.textBold}>Total Harga : Rp. {numberWithCommas(history.totalHarga)}</Text>
                        </View>
                    </View>
                )
            })}

            <View style={styles.footer}>
                <View style={styles.label}>
                    <Text style={styles.textBlue}>Status :</Text>
                    <Text style={styles.textBlue}>Ongkir (2-3 Hari) :</Text>
                    <Text style={styles.textBlue}>Total Harga :</Text>
                </View>
                <View style={styles.label}>
                    <Text style={styles.textBlue}>{pesanan.status}</Text>
                    <Text style={styles.textBlue}>Rp. {numberWithCommas(15000)}</Text>
                    <Text style={styles.textBlue}>Rp. {numberWithCommas(pesanan.totalHarga + 15000)}</Text>
                </View>
            </View>
        </View>
    )
}

export default CardHistory

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
        padding: 15,
        marginBottom: 20,
        borderRadius: 10
    },
    tanggal: {
        fontFamily: fonts.primary.bold,
        fontSize: 14
    },
    history: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textBold: {
        fontFamily: fonts.primary.bold,
        fontSize: 11
    },
    jersey: {
        width: responsiveWidth(66),
        height: responsiveWidth(66)
    },
    desc: {
        marginLeft: responsiveWidth(7)
    },
    name: {
        fontFamily: fonts.primary.bold,
        fontSize: 13,
        textTransform: 'capitalize'
    },
    price: {
        fontFamily: fonts.primary.regular,
        fontSize: 12
    },
    footer: {
        flexDirection: 'row',
    },
    label: {
        flex: 1,
    },
    textBlue: {
        textAlign: 'right',
        fontFamily: fonts.primary.bold,
        color: colors.primary,
        textTransform: 'uppercase'
    }
})
