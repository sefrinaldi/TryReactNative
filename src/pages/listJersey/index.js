import React, { Component } from 'react';
import { Text, View } from 'react-native'


class ListJersey extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>List Jersey Screen</Text>
            </View>
         );
    }
}
 
export default ListJersey;