import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ListCart } from '../../components';
import { dummyPesanans } from '../../data';
import { colors } from '../../utils';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            carts: dummyPesanans[0]
         }
    }
    render() { 
        const { carts } = this.state
        return ( 
            <View style={styles.page}>
                <ListCart carts={carts.pesanans} />
            </View>
         );
    }
}
 
export default Cart;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    }
})
