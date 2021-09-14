import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Picker } from '@react-native-picker/picker'

const Pilihan = (props) => {

    const { label, width, height, fontSize, datas } = props

    const [selectedValue, setselectedValue] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.label(fontSize)}>{label} :</Text>
            <View style={styles.wrapperPicker}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker(width, height, fontSize)}
                    onValueChange={(itemValue, itemIndex) =>
                        setselectedValue(itemValue)
                    }>
                        <Picker.Item label="--Pilih--" value="" />
                        {datas.map((item, index) => {
                            return <Picker.Item label={item} value={item} key={index} />
                    })}
                </Picker>
            </View>
        </View>
    )
}

export default Pilihan

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    label: fontSize => ({
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.regular
    }),
    wrapperPicker: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.border,
        alignItems: 'center',
    },
    picker: (width, height, fontSize) => ({
        width: width ? width : '100%',
        height: height ? height : 46,
        fontSize: fontSize ? fontSize : 18,
        fontFamily: fonts.primary.regular
    })
})
