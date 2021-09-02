import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconDelete } from '../../../assets'
import { colors, fonts, numberWithCommas, responsiveHeight, responsiveWidth } from '../../../utils'
import Jarak from '../Jarak'

const CardCart = (props) => {
    const { cart } = props
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={cart.product.picture[0]} />
            <View style={styles.desc}>
                <Text style={styles.name}>{cart.product.name}</Text>
                <Text style={styles.text}>Harga : Rp. {numberWithCommas(cart.product.price)}</Text>
                <Jarak height={responsiveHeight(14)} />
                <Text style={styles.textBold}>Pesan : {cart.jumlahPesan}</Text>
                <Text style={styles.textBold}>Ukuran : {cart.ukuran}</Text>
                <Text style={styles.textBold}>Total Harga : Rp. {numberWithCommas(cart.totalHarga)}</Text>
                <Text style={styles.textBold}>keterangan :</Text>
                <Text style={styles.textBold}>{cart.keterangan}</Text>
            </View>
            <View style={styles.delete}>
                <IconDelete />
            </View>
        </View>
    )
}

export default CardCart

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        marginTop: 15,
        marginHorizontal: 30,
        borderColor: colors.border,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        width: responsiveWidth(77),
        height: responsiveHeight(88),
        resizeMode: 'contain'
    },
    delete: {
        flex: 1,
        alignItems: 'flex-end'
    },
    name: {
        fontFamily: fonts.primary.bold,
        fontSize: 13,
        textTransform: 'capitalize'
    },
    text: {
        fontFamily: fonts.primary.regular,
        fontSize: 11
    },
    textBold: {
        fontFamily: fonts.primary.bold,
        fontSize: 11
    }
})
