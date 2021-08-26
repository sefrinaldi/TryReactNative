import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconBack, IconShoppingCart } from '../../../assets'
import { colors } from '../../../utils'
import TextOnly from './TextOnly'

const Button = (props) => {

    const { icon, totalCart, padding, type, title, onPress } = props

    const Icon = () => {
        if (icon === "cart") {
            return <IconShoppingCart />
        } else if (icon === "arrow-left") {
            return <IconBack />
        }
        return <IconShoppingCart />
    }

    if (type === "text"){
        return <TextOnly {...props} onPress={onPress} />
    }
    
    return (
        <TouchableOpacity style={styles.container(padding)} onPress={onPress}>
            <Icon />
            {totalCart && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalCart}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor: colors.white,
        borderRadius: 5,
        padding: padding       
    }),
    notif: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "red",
        borderRadius: 3,
        padding: 3
    },
    textNotif: {
        fontSize: 8,
        color: colors.white
    }
})
