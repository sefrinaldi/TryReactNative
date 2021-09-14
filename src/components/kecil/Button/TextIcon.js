import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IconWhiteCart, IconShoppingCart, IconSubmit } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Jarak from '../Jarak'

const TextIcon = ({icon, padding, onPress, title, fontSize}) => {
    const Icon = () => {
        if (icon === "cart") {
            return <IconShoppingCart />
        } else if (icon === "arrow-left") {
            return <IconBack />
        } else if (icon === "whiteCart") {
            return <IconWhiteCart />
        } else if (icon === 'submit') {
            return <IconSubmit />
        }
        return <IconShoppingCart />
    }

    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Icon />
            <Jarak width={5}/>
            <Text style={styles.title(fontSize)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextIcon

const styles = StyleSheet.create({
    container: (padding) => ({
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderRadius: 5,
        padding: padding,
        justifyContent: 'center',
        alignItems: 'center'
    }),
    title: (fontSize) => ({
        color: colors.white,
        fontSize: fontSize ? fontSize : 15,
        fontFamily: fonts.primary.bold
    })
})
