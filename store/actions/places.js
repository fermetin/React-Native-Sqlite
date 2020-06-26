export const ADD_PLACE = "ADD_PLACE"



export const addPlace = (newPlace) => {
    return{
        type: ADD_PLACE,
        newPlace
    }
}