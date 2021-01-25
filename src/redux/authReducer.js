import { stopSubmit } from 'redux-form';
import {authAPI} from '../api/api';

const SET_USER_DATA = 'SET-USER-DATA';
const UNSET_USER_DATA = 'UNSET-USER-DATA';
const TOGLE_IS_AUTH = 'TOGLE-IS-AUTH';

let initialState = {
    userData: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                userData: {...action.payload},
            }
            break;
        }
        case UNSET_USER_DATA: {
            stateCopy = {
                ...state,
                userData: {...action.payload},
            }
            break;
        }
        case TOGLE_IS_AUTH: {
            stateCopy = {
                ...state,
                isAuth: action.isAuth,
            }
            break;
        }
        default: 
            stateCopy = {...state}
    }

    return stateCopy;
}

export const setUserActionCreator = (payload) => {
    let action = {
        type: SET_USER_DATA,
        payload: payload,
    }
    return action;
}
export const unsetUserActionCreator = (payload) => {
    let action = {
        type: UNSET_USER_DATA,
        payload: payload,
    }
    return action;
}

export const setIsAuthActionCreator = (isAuth) => {
    let action = {
        type: TOGLE_IS_AUTH,
        isAuth: isAuth,
    }
    return action;
}



export const checkAuthThunkCreator = () => (dispatch) => {
    return authAPI.me().then( response => {
        if (response.resultCode === 0) {
            dispatch(setUserActionCreator(response.data));
            dispatch(setIsAuthActionCreator(true));
        }
    });
}

export const unsetUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.logout().then( response => {
            if (response.resultCode === 0) {
                let payload = {
                    id: null,
                    email: null,
                    login: null,
                }
                dispatch(unsetUserActionCreator(payload));
                dispatch(setIsAuthActionCreator(false));
            }
        });
    }
}

export const setIsAuthThunkCreator = (formData) => {
    return (dispatch) => {
        authAPI.login(formData).then( response => {
            if (response.resultCode === 0) {
                let payload = {
                    id: response.data.userId,
                    email: null,
                    login: null,
                }
                dispatch(unsetUserActionCreator(payload));
                dispatch(setIsAuthActionCreator(true));
            }
            else {
                let error_message = response.messages.length > 0 ? response.messages[0] : 'Email or password is incorrect';
                let action = stopSubmit('login', {_error: error_message});
                dispatch(action);
            }
        });
    }
}

export default authReducer;