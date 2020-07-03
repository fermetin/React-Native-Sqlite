import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import { Images } from '../constants/Images'

import HomeStackNavigator from './HomeStackNavigator'
import ProfileStackNavigator from './ProfileStackNavigator'

import TabBarIcon from '../components/Icons/TabBarIcon'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'
import AddPlaceScreen from '../screens/AddPlaceScreen'


const BottomTab = createBottomTabNavigator()
const INITAL_ROUTE_NAME = "Home"

export default function BottomTabNavigator({ navigation, route }) {

    navigation.setOptions({
        headerTitle: route.name,
    })

    return (
        <BottomTab.Navigator
            initialRouteName={INITAL_ROUTE_NAME}
            screenOptions={{
                 headerShown: false
                 }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />
            
                    
                }}
            />
            <BottomTab.Screen
                name="AddPlace"
                component={AddPlaceScreen}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />
                }}
            />
        </BottomTab.Navigator>
    )
}



