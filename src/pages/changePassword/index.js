import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button, Inputan } from '../../components';
import { colors, responsiveHeight } from '../../utils';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.pages}>
                <View>
                    <Inputan label="Old Password" secureTextEntry/>
                    <Inputan label="New Password" secureTextEntry/>
                    <Inputan label="Confirm Password" secureTextEntry />
                </View>

                <View style={styles.submit}>
                    <Button
                        title="Submit"
                        type="textIcon"
                        icon="submit"
                        padding={responsiveHeight(15)}
                        fontSize={18}
                    />
                </View>
            </View>
        );
    }
}

export default ChangePassword;

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'space-between'
    },
    submit: {
        marginVertical: 30
    }
})
