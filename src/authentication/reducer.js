import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
} from './actionTypes'

const initialState = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    userPhone: localStorage.getItem('userPhone'),
    userName: localStorage.getItem('userName'),
    user: {
        phone: localStorage.getItem('userLoginPhone')
    }
}

function authentication(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.creds,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message,
            }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
            }
        }
        case LOGOUT_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: true,
            }
        default:
            return state
    }
}

export default authentication
