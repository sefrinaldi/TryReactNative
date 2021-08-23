import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { BannerSlider, HeaderComponent } from '../../components'
import { colors } from '../../utils'

export class Home extends Component {
    render() {
        return (
            <View style={styles.page}>
                <HeaderComponent /> 
                <BannerSlider />               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default Home