import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Inputan = ({ textarea, label, width, height, fontSize, placeholder }) => {
    if (textarea) {
        return (
            <View style={styles.container}>
                <Text style={styles.label(fontSize)}>{label} :</Text>
                <TextInput style={styles.inputTextArea(fontSize)} multiline={true} numberOfLines={3} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <TextInput style={styles.input(width, height, fontSize)}/>
        </View>
    )
}

export default Inputan

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    label: fontSize => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.regular
    }),
    input: (width, height, fontSize) => ({
        width: width,
        height: height,
        fontSize: fontSize ? fontSize: 18,
        fontFamily: fonts.primary.regular,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10
    }),
    inputTextArea: fontSize => ({
        fontSize: fontSize ? fontSize: 18,
        fontFamily: fonts.primary.regular,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlignVertical: 'top'
    })
})
