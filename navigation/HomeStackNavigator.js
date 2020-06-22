import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import AddPlaceScreen from '../screens/AddPlaceScreen'
import FullSizeMapScreen from '../screens/FullSizeMapScreen'
import PlaceDetailsScreen from '../screens/PlaceDetailsScreen'

const HomeStack = createStackNavigator()

const HomeStackNavigator = () => {
    return (

        <HomeStack.Navigator  >
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={{}}
            />
            <HomeStack.Screen
                name="Add Place Screen"
                component={AddPlaceScreen}
                options={{}}
            />
            <HomeStack.Screen
                name="Map"
                component={FullSizeMapScreen}
                options={{}}
            />
            <HomeStack.Screen
                name="Place Details Screen"
                component={PlaceDetailsScreen}
                options={{}}
            />
        </HomeStack.Navigator>
    )
}
export default HomeStackNavigator
