import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import { Button, Inputan, Pilihan } from '../../components';
import { dummyProfile } from '../../data';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProvinsi: [],
            dataKota: [],
            profile: dummyProfile
        }
    }
    render() {
        const { dataProvinsi, dataKota, profile } = this.state
        return (
            <View style={styles.pages}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Inputan label="Name" value={profile.name} />
                    <Inputan label="Email" value={profile.email} />
                    <Inputan label="No. Handphone" value={profile.hp} />
                    <Inputan label="Alamat" value={profile.alamat} textarea />

                    <Pilihan label="Provinsi" datas={dataProvinsi} />
                    <Pilihan label="Kota/Kab" datas={dataKota} />

                    <View style={styles.inputImage}>
                        <Text style={styles.label}>Foto Profile :</Text>

                        <View style={styles.wrapperUpload}>
                            <Image style={styles.image} source={profile.avatar} />

                            <View style={styles.buttonChange}>
                                <Button title="Change Foto" type="text" padding={7} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.submit}>
                        <Button
                            title="Submit"
                            type="textIcon"
                            icon="submit"
                            padding={responsiveHeight(15)}
                            fontSize={18}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default EditProfile;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10
    },
    inputImage: {
        marginTop: 10
    },
    label: {
        fontFamily: fonts.primary.regular,
        fontSize: 18
    },
    wrapperUpload: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
    },
    buttonChange: {
        flex: 1,
        marginLeft: 20
    },
    submit: {
        marginVertical: 30
    }
})
