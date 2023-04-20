import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home';
import Profile from '../src/screens/Profile';

const Tab = createBottomTabNavigator();

const BottonTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Welcome' component={Home}/>
            <Tab.Screen name='About' component={Profile}/>
        </Tab.Navigator>
    )
}

export default BottonTabs