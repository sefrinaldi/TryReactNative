import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconHome, 
    IconHomeActive, 
    IconJersey, 
    IconJerseyActive, 
    IconProfile, 
    IconProfileActive
} from '../../../assets'
import { colors } from '../../../utils'

const TabItem = ({ isFocused, onPress, onLongPress, label}) => {

    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <IconHomeActive /> : <IconHome />
        }
        else if (label === "Jersey") {
            return isFocused ? <IconJerseyActive /> : <IconJersey />            
        }
        else if (label === "Profile") {
            return isFocused ? <IconProfileActive /> : <IconProfile />
        }
        else
            return <IconHome />
    }

    return (
        <TouchableOpacity            
            // accessibilityRole="button"
            // accessibilityState={isFocused ? { selected: true } : {}}            
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
          >
              <Icon />
            <Text style={styles.text(isFocused)}>
              {label}
            </Text>
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container : {        
        alignItems: "center"        
    },
    text: (isFocused) => ({
        color: isFocused ? colors.white : colors.secondary,
        fontSize: 11,
        marginTop: 4
    })
})
