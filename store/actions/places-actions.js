export const ADD_PLACE = "ADD_PLACE"
export const DELETE_PLACE = "DELETE_PLACE"
export const FETCH_PLACES = 'FETCH_PLACES'

import { PlaceModel } from '../../model/PlaceModel'

import * as FileSystem from 'expo-file-system'
import { insertPlace, fetchPlacesfromDb } from '../../db/sqlitedb'
import { getInfoAsync, getContentUriAsync, readDirectoryAsync, readAsStringAsync, deleteAsync } from 'expo-file-system'


export const addPlace = (newPlace) => {

    return async (dispatch) => {
        //new oath for each place
        const fileName = newPlace.imgUrl.split("/").pop()
        const newPathImage = await readDirectoryAsync(FileSystem.documentDirectory)
        console.log(newPathImage)

        try {

            const dbResult = await insertPlace(newPlace)
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
            console.log(dbres)
            placesArray = dbres.rows._array
        } catch (error) {
            console.log(error)
        }
        
        dispatch({
            type: FETCH_PLACES,
            placesArrayFromDb: placesArray 
        })
    }
}

//sleeeeeeep
export const deletePlace = (id) => {
    return async (dispatch) => {




        dispatch({
            type: DELETE_PLACE,
            id
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