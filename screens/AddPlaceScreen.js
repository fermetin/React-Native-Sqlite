import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Platform, Image, Alert, BackHandler } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import { PlaceModel } from '../model/PlaceModel'

import { useDispatch } from 'react-redux'
import * as placeActions from '../store/actions/places-actions'

import { TextInput } from 'react-native-gesture-handler'
import AddPlaceForm from '../components/AddPlaceForm'
import { Images } from '../constants/Images'


const AddPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()

    const [pickedimageResult, setPickedImageResult] = useState(null)
    
    const addNewPlaceRedux = (placeFormInputs) => {

        const currentDate = new Date()

        const randomCount = Math.floor(Math.random() * 10000)

        const newPlace = new PlaceModel(
            `p${randomCount}`,
            placeFormInputs.placename,
            placeFormInputs.city,
            placeFormInputs.adress,
            pickedimageResult.uri,
            currentDate.toString())

        dispatch(placeActions.addPlace(newPlace))
        navigation.goBack()
    }

    const addPlace_LastCheck = (placeInfoInputs) => {
        if (pickedimageResult) {
            Alert.alert("Ohhh yee", "Every thing is good but maybe you wanna look up one more time ;)",
                [
                    {
                        text: "Gooo",
                        onPress: () => {
                            addNewPlaceRedux(placeInfoInputs)
                            deletePhotoFromForm()
                        }
                    },
                    {
                        text: "Let's Look",
                        onPress: () => { },
                        style: "cancel"
                    }])
        }
    }

    const permissionsAndGetPhoto = (fromCamera) => {
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
        if (pickedimageResult !== null) {
            Alert.alert("Heyy", "Are you sure you gonna change Photo", [{ text: "Yes", onPress: () => fetchPhoto() }, { text: 'Cancel' }])
        } else {
            fetchPhoto()
        }
    }

    const handleImageResult = (res) => {
        if (res.cancelled) return
        setPickedImageResult(res)
    }

    const deletePhotoFromForm = () => {
        setPickedImageResult(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.formStyle}>
                <AddPlaceForm onSubmitHandler={addPlace_LastCheck} isPhotoValid={pickedimageResult ? true : false} />
            </View>
            <View style={styles.imageAndButtons}>
                {pickedimageResult?.uri && <Image source={{ uri: pickedimageResult?.uri }} style={styles.imageStyle} />}
                <View style={styles.btns}>
                    <Button title="Take Picture From Roll" color="#02f1ca" onPress={() => permissionsAndGetPhoto(false)} />
                    <Button title="Take Picture From Camera" color="#02f1ca" onPress={() => permissionsAndGetPhoto(true)} />
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




