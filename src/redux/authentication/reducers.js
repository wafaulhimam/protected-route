import { LOG_IN, LOG_OUT } from './actionTypes'

// create initial state
const initialState = {
    isAuthenticated: false
}

// reducer
const authReducer = (state = initialState, action ) => {
    switch(action.type) {
        case LOG_IN:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOG_OUT:
            return {
                ...state,
                isAuthenticated: false
            }
        default: 
            return state;
    }
}

export default authReducer;