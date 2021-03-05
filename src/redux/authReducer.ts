import { stopSubmit } from 'redux-form';
import {authAPI, ResultCodesEnum, securityAPI} from '../api/api';
import { InitialAuthReducerStateType } from "./types/types";

const SET_USER_DATA = 'message-me/authReducer/SET-USER-DATA';
const UNSET_USER_DATA = 'message-me/authReducer/UNSET-USER-DATA';
const TOGLE_IS_AUTH = 'message-me/authReducer/TOGLE-IS-AUTH';
const SET_CAPTCHA_URL = 'message-me/authReducer/SET-CAPTCHA-URL';


let initialState: InitialAuthReducerStateType = {
    userData: {
        id: null,
        email: null,
        login: null,
        captchaUrl: null,
    },
    isAuth: false,
}

const authReducer = (state = initialState, action: any): InitialAuthReducerStateType => {
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
                userData: { 
                    ...state.userData,
                    captchaUrl: action.url,
                }
            }
            break;
        }
        default: 
            stateCopy = {...state}
    }

    return stateCopy;
}

/** -----Helpful types------ */
type PayloadType = {
    id: number | null,
    email: string | null,
    login: string | null,
}
/** ------------------------ */

/** -----Action types------- */
type SetUserActionType = {
    type: typeof SET_USER_DATA,
    payload: PayloadType,
}
type UnsetUserActionType = {
    type: typeof UNSET_USER_DATA,
    payload: PayloadType,
}
type SetIsAuthActionCreator = {
    type: typeof TOGLE_IS_AUTH,
    isAuth: boolean,
}
type SetCaptchaUrlActionCreator = {
    type: typeof SET_CAPTCHA_URL,
    url: string,
}
/** ------------------------ */

/** -------Action creators--------- */
export const setUserActionCreator = (payload: PayloadType): SetUserActionType => {
    let action: SetUserActionType = {
        type: SET_USER_DATA,
        payload: payload,
    }
    return action;
}
export const unsetUserActionCreator = (payload: PayloadType): UnsetUserActionType => {
    let action: UnsetUserActionType = {
        type: UNSET_USER_DATA,
        payload: payload,
    }
    return action;
}

export const setIsAuthActionCreator = (isAuth: boolean): SetIsAuthActionCreator => {
    let action: SetIsAuthActionCreator = {
        type: TOGLE_IS_AUTH,
        isAuth: isAuth,
    }
    return action;
}

const setCaptchaUrlActionCreator = (url: string): SetCaptchaUrlActionCreator => {
    let action: SetCaptchaUrlActionCreator = {
        type: SET_CAPTCHA_URL,
        url: url,
    }
    return action;
}
/** --------------------------------- */

/** -------Thunk creators--------- */
export const checkAuthThunkCreator = () => async (dispatch: any) => {
    let response = await authAPI.me();

    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserActionCreator(response.data));
        dispatch(setIsAuthActionCreator(true));
    }
}

export const unsetUserThunkCreator = () => async (dispatch: any) => {
    let response = await authAPI.logout();
    if (response.resultCode === ResultCodesEnum.Success) {
        let payload = {
            id: null,
            email: null,
            login: null,
            captchaUrl: null,
        }
        dispatch(unsetUserActionCreator(payload));
        dispatch(setIsAuthActionCreator(false));
    }
}
const getCaptchaUrlThunkCreator = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;

    dispatch(setCaptchaUrlActionCreator(captchaUrl));
}

export const setIsAuthThunkCreator = (formData: any) => async (dispatch: any) => {
    let response = await authAPI.login(formData);
    if (response.resultCode === ResultCodesEnum.Success) {
        let payload: PayloadType = {
            id: response.data.userId,
            email: null,
            login: null,
        }
        dispatch(setUserActionCreator(payload));
        dispatch(setIsAuthActionCreator(true));
    }
    else {
        /** Неверный код капчи */
        if (response.resultCode === ResultCodesEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrlThunkCreator());
        }

        let error_message = response.messages.length > 0 ? response.messages[0] : 'Email or password is incorrect';
        let action = stopSubmit('login', {_error: error_message});
        dispatch(action);
    }
}
/** --------------------------------- */

export default authReducer;