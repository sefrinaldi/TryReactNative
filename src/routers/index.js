import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Splash, ListJersey, Profile, JerseyDetail, Cart, Checkout } from '../pages';
import { BottomNavigator } from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="ListJersey" component={ListJersey} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
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
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MyApp"
                    component={MyApp}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="JerseyDetail"
                    component={JerseyDetail}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{ title: "Keranjang" }}
                />
                <Stack.Screen 
                    name="Checkout"
                    component={Checkout}
                />
            </Stack.Navigator>
        )
    }
}

export default Router
