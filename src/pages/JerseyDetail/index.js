import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button, CardLiga, Inputan, Jarak, JerseySlider, Pilihan } from '../../components';
import { colors, fonts, responsiveHeight, heightMobileUI, numberWithCommas, responsiveWidth } from '../../utils';
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
                <JerseySlider image={image} />
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

                        <View style={styles.wrapperInput}>
                            <Inputan label="Jumlah"
                                width={responsiveWidth(166)}
                                height={responsiveHeight(43)}
                                fontSize={13}
                            />
                            <Pilihan
                                label="Pilih Ukuran"
                                width={responsiveWidth(166)}
                                height={responsiveHeight(43)}
                                fontSize={13}
                                datas={jersey.size}
                            />
                        </View>
                        <Inputan
                            textarea
                            label="Keterangan"
                            fontSize={13}
                            placeholder="Isi jika ingin menambahkan Name Tag 
                            (nama dan nomor ounggung)"
                        />
                        <Jarak height={15} />
                        <Button
                            title="Masuk Keranjang"
                            type="textIcon"
                            icon="whiteCart"
                            padding={responsiveHeight(17)}
                            fontSize={18}
                        />
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
        height: responsiveHeight(400),
        backgroundColor: colors.white,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    button: {
        position: 'absolute',
        marginTop: 30,
        marginLeft: 30,
        zIndex: 1
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
        // justifyContent: 'space-between',
        marginBottom: 5
    },
    typeWeight: {
        fontFamily: fonts.primary.regular,
        fontSize: 13,
        marginRight: 40
    },
    wrapperInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default JerseyDetail;