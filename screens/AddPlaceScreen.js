import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Platform, Image, Alert } from 'react-native'

import * as ImagePicker from 'expo-image-picker'
import TakePicture from '../components/TakePicture';


const AddPlaceScreen = () => {
    const [image, setImage] = useState(null)

    const getPhotoAllStaff = (fromCamera) => {
        const fetchPhoto = async () => {
            try {
                if (fromCamera) {
                    const { status } = await ImagePicker.requestCameraPermissionsAsync()
                    if (status !== "granted") {
                        Alert.alert('Ohoooo NoT GRANTED')
                        return
                    }
                    const result = await ImagePicker.launchCameraAsync()
                    if(result.cancelled)return
                    setImage(result.uri)
                } else {
                    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
                    if (status !== "granted") {
                        Alert.alert('Ohoooo NoT GRANTED')
                        return
                    }
                    const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [10, 10],
                        quality: 0.5
                    })
                    if(result.cancelled)return
                    setImage(result.uri)
                }

            } catch (error) {
                console.log(error)
            }
        }
        if (image !== null)
        {
            Alert.alert("Heyy", "Are you sure you gonna change Photo", [{ text: "Yes" ,onPress:()=>fetchPhoto()}, { text: 'Cancel' }])
        }else{
            fetchPhoto()
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title="Take Picture From Roll" onPress={() => getPhotoAllStaff(false)} />
            <Button title="Take Picture From Camera" onPress={() => getPhotoAllStaff(true)} />
            {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 300,
        height: 300,
        resizeMode: "contain"
    }
});

export default AddPlaceScreen




