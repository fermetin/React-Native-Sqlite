import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Platform, Image, Alert, BackHandler } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import { PlaceModel } from '../model/PlaceModel'

import { useDispatch } from 'react-redux'
import * as placeActions from '../store/actions/places'

import { TextInput } from 'react-native-gesture-handler'
import AddPlaceForm from '../components/AddPlaceForm'
import { Images } from '../constants/Images'


const AddPlaceScreen = () => {
    const dispatch = useDispatch()
    const [imageResult, setImageResult] = useState(null)
    
    
    const addingPlace = (placeInfoInputs) => {
        
        const currentDate = new Date()

        const random = Math.floor(Math.random() * 10000)

        const newPlace = new PlaceModel(
            `p${random}`,
            placeInfoInputs.placename,
            placeInfoInputs.city,
            placeInfoInputs.adress,
            imageResult.uri,
            currentDate.toString())

        dispatch(placeActions.addPlace(test))
        console.log(newPlace, currentDate, random)

    }

    const allInputsHandler = (placeInfoInputs) => {
        if (imageResult) {
            Alert.alert("Ohhh yee", "Every thing is good but maybe you wanna look up one more time ;)",
                [
                    {
                        text: "Gooo",
                        onPress: () => addingPlace(placeInfoInputs)
                    },
                    {
                        text: "Let's Look",
                        onPress: () => { },
                        style: "cancel"
                    }])
        }
    }

    const getPhotoAllStaff = (fromCamera) => {
        const fetchPhoto = async () => {
            try {
                if (fromCamera) {
                    const { status } = await ImagePicker.requestCameraPermissionsAsync()
                    if (status !== "granted") {
                        Alert.alert('You can not Add any place beyb if you dont allow ;)')
                        return
                    }
                    const result = await ImagePicker.launchCameraAsync()
                    handleImageResult(result)
                } else {
                    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()
                    if (status !== "granted") {
                        Alert.alert('You can not Add any place beyb if you dont allow ;)')
                        return
                    }
                    const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.Images,
                        allowsEditing: true,
                        aspect: [10, 10],
                        quality: 0.5
                    })
                    handleImageResult(result)
                }

            } catch (error) {
                console.log(error)
            }
        }
        if (imageResult !== null) {
            Alert.alert("Heyy", "Are you sure you gonna change Photo", [{ text: "Yes", onPress: () => fetchPhoto() }, { text: 'Cancel' }])
        } else {
            fetchPhoto()
        }
    }

    const handleImageResult = (res) => {
        if (res.cancelled) return
        setImageResult(res)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formStyle}>
                <AddPlaceForm onSubmitHandler={allInputsHandler} />
            </View>
            <View style={styles.imageAndButtons}>
                {imageResult?.uri && <Image source={{ uri: imageResult?.uri }} style={styles.imageStyle} />}
                <View style={styles.btns}>
                    <Button title="Take Picture From Roll" color="#02f1ca" onPress={() => getPhotoAllStaff(false)} />
                    <Button title="Take Picture From Camera" color="#02f1ca" onPress={() => getPhotoAllStaff(true)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageAndButtons: {
        flexDirection: 'column',
    },
    formStyle: {
        marginBottom: 40
    },
    btns: {
        marginVertical: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    imageStyle: {
        width: "100%",
        height: 300,
        resizeMode: "contain"
    }
});

export default AddPlaceScreen




