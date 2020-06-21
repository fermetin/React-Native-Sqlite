import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigator from './HomeStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'
import TabBarIcon from '../components/TabBarIcon'
import Colors from '../constants/Colors'

const BottomTab = createBottomTabNavigator()
const INITAL_ROUTE_NAME = "Home"

export default function BottomTabNavigator({ navigation, route }) {

    navigation.setOptions({
        headerTitle: getHeaderName(route),
    })

    return (
        <BottomTab.Navigator
                tabBarOptions={{
                    showLabel:false
                }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarLabel:"Profile",
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />
                }}
            />
        </BottomTab.Navigator>
    )
}

const allPartOfTabBarOptions = {
    tabBarLabel: "",
}


function getHeaderName(route) {

    const currentRouteName = route.state?.routes[route.state?.index].name ?? INITAL_ROUTE_NAME

    return currentRouteName
}
