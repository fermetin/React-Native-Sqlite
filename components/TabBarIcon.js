import React from 'react'

import {Ionicons} from '@expo/vector-icons'

import Colors from '../constants/Colors'


export default function TabBarIcon({focused,name}) {
    return (
        <Ionicons 
            name={name}
            size={30}
            style={{marginBottom:-3}}
            focused={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    )
}
