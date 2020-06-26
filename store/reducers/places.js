import { Places } from '../../model/DummyData'


const initialState = {
    userPlaces: Places,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PLACE":
            console.log(state)
            return {
                userPlaces: state.userPlaces.concat(action.newPlace)
            }
    }
    return state
}