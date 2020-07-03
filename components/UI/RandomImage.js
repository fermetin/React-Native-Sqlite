import React from 'react'
import { Image } from 'react-native'
import { Images } from '../../constants/Images'

const RandomImage = () => {

    const randomCount = Math.floor(Math.random() * 5)

    return (<Image
        source={Images.randomArray[randomCount]}
        style={{ width: '100%', height: '100%', }}
        resizeMode="cover"
    />)
}
export default RandomImage