import React, { Component } from 'react';
import { Text, View } from 'react-native'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
            </View>
         );
    }
}
 
export default Profile;