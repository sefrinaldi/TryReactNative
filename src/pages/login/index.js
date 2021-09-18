import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Logo, Ilustrasi } from "../../assets";
import { Button, Inputan, Jarak } from '../../components';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.pages}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                <View style={styles.cardLogin}>
                    <Inputan label="Email" />
                    <Inputan label="Password" secureTextEntry />
                    <Jarak height={25} />
                    <Button title="Login" type="text" padding={7} fontSize={18} />
                </View>

                <View style={styles.register}>
                    <Text style={styles.textBlue}>Belum Punya Akun ?</Text>
                    <Text style={styles.textBlue}>Klik untuk daftar</Text>
                </View>

                {/* <View style={styles.ilustrasi}>
                    <Ilustrasi />
                </View> */}
            </View>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white
    },
    logo: {
        alignItems: 'center',
        marginTop: responsiveHeight(50)
    },
    ilustrasi: {
        position: "absolute",
        bottom: 0,
        right: -100,
    },
    cardLogin: {
        marginHorizontal: 30,
        backgroundColor: colors.white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
        padding: 30,
        marginTop: 10
    },
    register: {
        alignItems: 'center',
        marginTop: 10
    },
    textBlue: {
        fontFamily: fonts.primary.bold,
        fontSize: 18,
        color: colors.primary
    }
})
