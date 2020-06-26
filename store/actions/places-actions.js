export const ADD_PLACE = "ADD_PLACE"

import { PlaceModel } from '../../model/PlaceModel'

import * as FileSystem from 'expo-file-system'


export const addPlace = (newPlace) => {

    return async (dispatch) => {
        //new oath for each place
        const fileName = newPlace.imgUrl.split("/").pop()
        const currentFullPath = FileSystem.documentDirectory + fileName

        //move to image file to new path easyyy 
        console.log(currentFullPath)

        try {
            await FileSystem.moveAsync({
                from: newPlace.imgUrl,
                to: currentFullPath
            })
        } catch (error) {
            console.log(error)
            throw error
        }


        dispatch({
             type: ADD_PLACE,
             newPlace
         })
    }
}