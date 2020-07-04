export const ADD_PLACE = "ADD_PLACE"
export const DELETE_PLACE = "DELETE_PLACE"
export const FETCH_PLACES = 'FETCH_PLACES'

import { PlaceModel } from '../../model/PlaceModel'

import * as FileSystem from 'expo-file-system'
import { insertPlacetoDb, fetchPlacesfromDb, deletePlacefromDb, updatePlacefromDb } from '../../db/sqlitedb'
import { getInfoAsync, getContentUriAsync, readDirectoryAsync, readAsStringAsync, deleteAsync } from 'expo-file-system'
import { move } from 'formik'


export const addPlace = (newPlace) => {

    return async (dispatch) => {

        const fileName = newPlace.imgUrl.split("/").pop()

        const newPathImage = FileSystem.documentDirectory + fileName

        try {

            await FileSystem.moveAsync({
                from: newPlace.imgUrl,
                to: newPathImage
            })
            newPlace.imgUrl = newPathImage

            const dbResult = await insertPlacetoDb(newPlace)

            newPlace.id = dbResult.insertId.toString()

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

export const fetchAllPlaces = () => {
    return async (dispatch) => {
        let placesArray
        try {

            const dbres = await fetchPlacesfromDb()

            placesArray = dbres.rows._array
        } catch (error) {
            console.log(error)
            throw error
        }

        dispatch({
            type: FETCH_PLACES,
            placesArrayFromDb: placesArray
        })
    }
}
// TODO update actions handle


export const deletePlace = (itemid) => {
    return async (dispatch) => {

        try {
            
            const result = await deletePlacefromDb(itemid)

        } catch (error) {
            console.log(error)
            throw error
        }

        dispatch({
            type: DELETE_PLACE,
            itemid
        })
    }
}
/**
 *
 *

             */