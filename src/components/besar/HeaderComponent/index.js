import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { IconSearch } from '../../../assets'
import { colors, responsiveHeight } from '../../../utils'
import { Button } from '../../kecil'

export class HeaderComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperHeader}>

                    {/* searching */}
                    <View style={styles.searchSection}>
                        <IconSearch />
                        <TextInput placeholder="Cari Jersey" style={styles.input} />
                    </View>

                    {/* ButtonCart */}
                    <Button icon="cart" padding={10}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125)
    },
    wrapperHeader: {
        marginTop: 15,
        marginHorizontal: 30,
        flexDirection: "row"
    },
    searchSection: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: "center"
    },
    input: {
        fontSize: 16
    }
})

export default HeaderComponent
