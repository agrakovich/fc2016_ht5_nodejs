import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    LOGOUT_REQUEST,
    LOGOUT_FAILURE,
} from './actionTypes'

import config from '../config';

export function loginUser(creds) {
    // TODO: вынести конфиги в отельное место
    const loginRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `phone=${creds.phone}&password=${creds.password}`,
    }

    return dispatch => {
        dispatch(requestLogin(creds))
            return fetch(`${config.apiUrl}${config.authRoute}`, loginRequest)
                .then(response => response.json().then(user => ({ user, response })))
                .then(({ user, response }) => {
                    if (!response.ok) {
                        dispatch(loginError(user.message))
                        return Promise.reject(user)
                    }
                    // TODO: move work with localstorage to separate module
                    localStorage.setItem('id_token', user.id_token)
                    localStorage.setItem('userName', user.name || '')

                    return dispatch(receiveLogin(user))
                })
                .catch(err => console.log('Error: ', err))
    }
}

function requestLogin(creds) {
    return {
        type: LOGIN_REQUEST,
        creds,
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_SUCCESS,
        id_token: user.id_token,
        userName: user.name || '',
    }
}

function loginError(message) {
    return {
        type: LOGIN_FAILURE,
        message,
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
    }
}

function logoutError(message) {
    return {
        type: LOGOUT_FAILURE,
        message,
    }
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout())

        return fetch(LOGOUT_PATH, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    dispatch(logoutError(response.message))
                    return Promise.reject(response)
                }

                history.push('/')
                localStorage.removeItem('id_token')
                return dispatch(receiveLogout())
            })
            .catch(err => console.log('Error: ', err))
    }
}
