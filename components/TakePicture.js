import React, { useEffect, useState } from 'react'
import { moduleName, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

const TakePicture = ({ fromCamera, imageHandler }) => {
    const [imageResult, setImageResult] = useState(null)
    useEffect(() => {

       
        fetchPermission()
    }, [])
    return {imageResult}
}
export default TakePicture




