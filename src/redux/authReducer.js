import { stopSubmit } from 'redux-form';
import {authAPI, securityAPI} from '../api/api';

const SET_USER_DATA = 'message-me/authReducer/SET-USER-DATA';
const UNSET_USER_DATA = 'message-me/authReducer/UNSET-USER-DATA';
const TOGLE_IS_AUTH = 'message-me/authReducer/TOGLE-IS-AUTH';
const SET_CAPTCHA_URL = 'message-me/authReducer/SET-CAPTCHA-URL';


let initialState = {
    userData: {
        id: null,
        email: null,
        login: null,
        captchaUrl: null,
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
        case SET_CAPTCHA_URL: {
            stateCopy = {
                ...state,
                captchaUrl: action.url,
            }
            break;
        }
        default: 
            stateCopy = {...state}
    }

    return stateCopy;
}

/** -------Action creators--------- */
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

const setCaptchaUrlActionCreator = (url) => {
    let action = {
        type: SET_CAPTCHA_URL,
        url: url,
    }
    return action;
}
/** --------------------------------- */

/** -------Thunk creators--------- */
export const checkAuthThunkCreator = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        dispatch(setUserActionCreator(response.data));
        dispatch(setIsAuthActionCreator(true));
    }
}

export const unsetUserThunkCreator = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === 0) {
        let payload = {
            id: null,
            email: null,
            login: null,
        }
        dispatch(unsetUserActionCreator(payload));
        dispatch(setIsAuthActionCreator(false));
    }
}
const getCaptchaUrlThunkCreator = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;

    dispatch(setCaptchaUrlActionCreator(captchaUrl));
}

export const setIsAuthThunkCreator = (formData) => async (dispatch) => {
    let response = authAPI.login(formData);
    if (response.resultCode === 0) {
        let payload = {
            id: response.data.userId,
            email: null,
            login: null,
        }
        dispatch(setUserActionCreator(payload));
        dispatch(setIsAuthActionCreator(true));
    }
    else {
        /** Неверный код капчи */
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
        }

        let error_message = response.messages.length > 0 ? response.messages[0] : 'Email or password is incorrect';
        let action = stopSubmit('login', {_error: error_message});
        dispatch(action);
    }
}
/** --------------------------------- */

export default authReducer;