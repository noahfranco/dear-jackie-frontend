import {START, FETCHING, FAILURE} from "../actions/viewDataAction"

const initialState = {
    card: [],
    isFetching: false,
    error: null
}

const viewDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case START:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING:
            return {
                ...state,
                isFetching: false, 
                card: action.payload
            }
        case FAILURE:
            return {
                ...state, 
                error: action.error
            }
        default:
            return state
    }
} 

export default viewDataReducer