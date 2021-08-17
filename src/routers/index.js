import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, ListJersey, Profile } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyApp = () => {
    return (
      <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="ListJersey" component={ListJersey} options={{ title: "Jersey"}} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
}

class Router extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="MyApp"
                    component={MyApp}
                    options={{ headerShown: false }} />                
            </Stack.Navigator>
        )
    }
}

export default Router
