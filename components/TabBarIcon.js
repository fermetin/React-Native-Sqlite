import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'


export default function TabBarIcon({focused,name}) {
    return (
        <Ionicons 
            name={name}
            size={30}
            style={{}}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    )
}
