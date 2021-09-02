import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { BannerSlider, Button, HeaderComponent, Jarak, ListJerseys, ListLiga } from '../../components'
import { colors, fonts } from '../../utils'
import { dummyJersey, dummyLigas } from '../../data'

export class ListJersey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ligas: dummyLigas,
            jerseys: dummyJersey
        }
    }

    render() {
        const { ligas, jerseys } = this.state
        const { navigation } = this.props
        return (
            <View style={styles.page}>
                <View>
                    <HeaderComponent navigation={navigation}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={styles.pilihLiga}>
                        <ListLiga ligas={ligas} />
                    </View>
                    <View style={styles.listJersey}>
                        <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> yg anda inginkan</Text>
                        <ListJerseys jerseys={jerseys} navigation={navigation}/>
                    </View>
                    <Jarak height={100} />
                </ScrollView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        marginTop: -30
    },
    pilihLiga: {
        marginHorizontal: 30,
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary.regular
    },
    listJersey: {
        marginHorizontal: 30,
        marginTop: 10,
    },
    boldLabel: {
        fontSize: 18,
        fontFamily: fonts.primary.bold
    }
})

export default ListJersey