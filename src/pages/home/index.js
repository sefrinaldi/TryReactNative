import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import { BannerSlider, Button, HeaderComponent, Jarak, ListJerseys, ListLiga } from '../../components'
import { colors, fonts } from '../../utils'
import { dummyJersey, dummyLigas } from '../../data'

export class Home extends Component {
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
        console.log("nav: ", navigation);
        return (
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
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
                        <HeaderComponent navigation={navigation}/>
                    </View>
                    <View>
                        <BannerSlider />
                    </View>
                    <View style={styles.pilihLiga}>
                        <Text style={styles.label}>Pilih Liga</Text>
                        <ListLiga ligas={ligas} />
                    </View>
                    <View style={styles.listJersey}>
                        <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> yg anda inginkan</Text>
                        <ListJerseys jerseys={jerseys} navigation={navigation}/>
                        <Button title="Lihat semua" type="text" padding={7} />
                    </View>                    
                    <Jarak height={100}/>
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
    pilihLiga: {
        marginHorizontal: 30,
        marginTop: 10
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

export default Home