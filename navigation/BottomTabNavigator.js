import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import TabBarIcon from '../components/TabBarIcon'

const BottomTab = createBottomTabNavigator()
const INITAL_ROUTE_NAME = "Home"

export default function BottomTabNavigator({ navigation, route }) {

    navigation.setOptions({
        headerTitle: getHeaderName(route)
    })

    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) =>  <TabBarIcon focused={focused} name="md-code-working" /> 
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileStackNavigator}
            />
        </BottomTab.Navigator>
    )
}

function getHeaderName(route) {

    const currentRouteName = route.state?.routes[route.state?.index].name ?? INITAL_ROUTE_NAME

    return currentRouteName
}
