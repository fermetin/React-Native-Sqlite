import React from 'react'
import { Image, View } from 'react-native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import BottomTabNavigator from './BottomTabNavigator'


import { Img } from 'react-image'
import RandomImage from '../components/UI/RandomImage'

const RootStack = createStackNavigator()

const RootNavigator = ({ navigation }) => {



    return (
        <RootStack.Navigator
            screenOptions={{
                headerTintColor: "transparent",
                headerStyle: {
                    height: 160,
                },
            }}
        >
            <RootStack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={({ route }) => ({
                    headerBackground: () => <RandomImage />
                })}
            />
        </RootStack.Navigator >
    )
}

export default RootNavigator

