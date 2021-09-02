import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { CardCart } from '../../kecil';

class ListCart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { carts } = this.props
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {carts.map((cart) => {
                        return <CardCart cart={cart} key={cart.id} />
                    })}
                </View>
            </ScrollView>
        );
    }
}

export default ListCart;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
})
