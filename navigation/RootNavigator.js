import React from 'react'
import { Image, View } from 'react-native'
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'

import BottomTabNavigator from './BottomTabNavigator'
import { Images } from '../constants/Images'

import { Img } from 'react-image'

const RootStack = createStackNavigator()

const RootNavigator = ({ navigation }) => {



    return (
        <RootStack.Navigator
            screenOptions={{
                headerTintColor:"transparent",
                headerStyle: {
                    height: 160,
                },
                headerBackground: () => <RandomImage />//downside
            }}
        >
            <RootStack.Screen
                name="BottomTabNavigator"
                component={BottomTabNavigator}
                options={{
                }}
            />
        </RootStack.Navigator >
    )
}

export default RootNavigator

const RandomImage = () =>{

    const randomCount = Math.floor(Math.random()*5) 

return (<Image
    source={Images.randomArray[randomCount]}
    style={{ width: '100%', height: '100%', }}
    resizeMode="cover"
/>)}