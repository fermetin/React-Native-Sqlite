export const ADD_PLACE = "ADD_PLACE"

import { PlaceModel } from '../../model/PlaceModel'

import * as FileSystem from 'expo-file-system'
import { insertPlace } from '../../db/sqlitedb'


export const addPlace = (newPlace) => {

    return async (dispatch) => {
        //new oath for each place
        const fileName = newPlace.imgUrl.split("/").pop()

        //const newPathImage = FileSystem.documentDirectory + fileName

        try {

            const dbResult = await insertPlace(newPlace)

        } catch (error) {

            console.log(error)
            throw error
        }


        newPlace.id = dbResult.insertId
        dispatch({
            type: ADD_PLACE,
            newPlace
        })
    }
}
/**
 *            newPlace.imgUrl = newPathImage
 * 
            const moveRes = await FileSystem.moveAsync({
                from: newPlace.imgUrl,
                to: newPathImage
            })
             */