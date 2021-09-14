import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CardMenu } from '../../kecil';

class ListMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { menus, navigation } = this.props
        return (
            <View>
                {menus.map(menu => {
                    return <CardMenu menu={menu} key={menu.id} navigation={navigation}/>
                })}
            </View>
        );
    }
}

export default ListMenu;

const styles = StyleSheet.create({})
