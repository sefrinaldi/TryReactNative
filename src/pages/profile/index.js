import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';
import { dummyMenus, dummyProfile } from '../../data';
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { ListMenu } from '../../components';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: dummyProfile,
            menus: dummyMenus
        }
    }
    render() {
        const { profile, menus } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image source={profile.avatar} style={styles.foto} />
                    <View style={styles.profile}>
                        <Text style={styles.name}>{profile.name}</Text>
                        <Text style={styles.desc}>No. Hp {profile.hp}</Text>
                        <Text style={styles.desc}>{profile.alamat} {profile.kota}</Text>
                    </View>
                    <ListMenu menus={menus}/>
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
        height: responsiveHeight(580),
        backgroundColor: colors.white,
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    foto: {
        width: responsiveWidth(150),
        height: responsiveWidth(150),
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    profile: {
        marginTop: 10,
        alignItems: 'center'
    },
    name: {
        fontFamily: fonts.primary.bold,
        fontSize: RFValue(24, heightMobileUI),
    },
    desc: {
        fontFamily: fonts.primary.regular,
        fontSize: RFValue(18, heightMobileUI)
    }
})

export default Profile;