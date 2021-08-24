import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { BannerSlider, HeaderComponent, ListLiga } from '../../components'
import { colors, fonts } from '../../utils'
import { dummyLigas } from '../../data'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ligas: dummyLigas
        }
    }

    render() {
        const { ligas } = this.state
        return (
            <View style={styles.page}>
                {/* <FlatList 
                    renderItem={<HeaderComponent />}
                />
                <FlatList 
                    renderItem={<BannerSlider />}
                />
                <FlatList 
                    renderItem={<ListLiga />}
                /> */}
                <View>
                    <HeaderComponent />
                </View>
                <View>
                    <BannerSlider />
                </View>
                <View style={styles.pilihLiga}>
                    <Text style={styles.label}>Pilih Liga</Text>
                    <ListLiga ligas={ligas} />
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    pilihLiga: {
        marginHorizontal: 30,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary.regular
    }
})

export default Home