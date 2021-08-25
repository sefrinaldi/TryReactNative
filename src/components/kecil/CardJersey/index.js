import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../../utils'
import Button from '../Button'

const CardJersey = ({ jersey }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={jersey.picture[0]} style={styles.picture}/>
                <Text style={styles.text}>{jersey.name}</Text>
            </TouchableOpacity>
            <Button type="text" title="Detail" padding={7}/>
        </View>
    )
}

export default CardJersey

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    card: {
      backgroundColor: colors.yellow,
      width: responsiveWidth(150),
      alignItems: 'center',
      padding: 10,    
      borderRadius: 10,
      marginBottom: 10
    },
    picture: {
        width: 124,
        height: 124
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 13,
        textTransform: 'capitalize',
        textAlign: 'center'
    },
})
