import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'

import ProfileScreen from '../screens/ProfileScreen'
import AddPlaceScreen from '../screens/AddPlaceScreen'

const ProfileStack = createStackNavigator()

const ProfileStackNavigator = ({route}) => {
    
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name="Profile"
                component={ProfileScreen}
                options={{}}
            />
        </ProfileStack.Navigator>
    )
}
export default ProfileStackNavigator
