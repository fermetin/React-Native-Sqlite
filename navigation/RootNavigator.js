import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from './BottomTabNavigator'

const RootStack = createStackNavigator()

export default function RootNavigator() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
            />
        </RootStack.Navigator>
    )
}

