import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { CardLiga } from '../../kecil'

class ListLiga extends Component {    
    render() {
        const { ligas } = this.props
        return (
            <View style={styles.container}>
                { ligas.map(liga => {
                    return (
                        <CardLiga ligas={liga} key={liga.id}/>
                    )
                })}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    }
})

export default ListLiga 
