import { Places } from '../../model/DummyData'


const initialState = {
    userPlaces: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLACE":

            return {
                userPlaces: state.userPlaces.concat(action.newPlace)
            }
    }
    return state
}