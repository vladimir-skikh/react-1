import { InferActionsTypes } from './reduxStore';
import { FormAction, stopSubmit } from 'redux-form';
import { ResultCodesEnum} from '../api/api';
import { securityAPI } from '../api/security-api';
import { authAPI } from '../api/auth-api';
import { BaseThunkType, InitialAuthReducerStateType } from "./types/types";

let initialState: InitialAuthReducerStateType = {
    userData: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
    captchaUrl: null,
}

const authReducer = (state = initialState, action: ActionsTypes): InitialAuthReducerStateType => {
    let stateCopy: InitialAuthReducerStateType;

    switch (action.type) {
        case 'SET_USER_DATA': {
            stateCopy = {
                ...state,
                userData: {...action.payload},
            }
            break;
        }
        case 'UNSET_USER_DATA': {
            stateCopy = {
                ...state,
                userData: {...action.payload},
            }
            break;
        }
        case 'TOGLE_IS_AUTH': {
            stateCopy = {
                ...state,
                isAuth: action.isAuth,
            }
            break;
        }
        case 'SET_CAPTCHA_URL': {
            stateCopy = {
                ...state,
                userData: { 
                    ...state.userData,
                },
                captchaUrl: action.url,
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



/** -------Action creators--------- */
export const actions = {
    setUserActionCreator: (payload: PayloadType) => ({type: 'SET_USER_DATA', payload: payload} as const),
    unsetUserActionCreator: (payload: PayloadType) => ({type: 'UNSET_USER_DATA', payload: payload} as const),
    setIsAuthActionCreator: (isAuth: boolean) => ({type: 'TOGLE_IS_AUTH', isAuth: isAuth} as const),
    setCaptchaUrlActionCreator: (url: string) => ({type: 'SET_CAPTCHA_URL', url: url} as const),
}

type ActionsTypes = InferActionsTypes<typeof actions>
/** --------------------------------- */

/** -------Thunk creators--------- */
type ThunkType = BaseThunkType<ActionsTypes | FormAction> 

export const checkAuthThunkCreator = (): ThunkType => async (dispatch) => {
    let response = await authAPI.me();
    
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setUserActionCreator(response.data as unknown as PayloadType));
        dispatch(actions.setIsAuthActionCreator(true));
    }
}

export const unsetUserThunkCreator = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.resultCode === ResultCodesEnum.Success) {
        let payload = {
            id: null,
            email: null,
            login: null,
            captchaUrl: null,
        }
        dispatch(actions.unsetUserActionCreator(payload));
        dispatch(actions.setIsAuthActionCreator(false));
    }
}
const getCaptchaUrlThunkCreator = (): ThunkType => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url;

    dispatch(actions.setCaptchaUrlActionCreator(captchaUrl));
}

export const setIsAuthThunkCreator = (formData: any): ThunkType => async (dispatch) => {
    let response = await authAPI.login(formData);
    if (response.resultCode === ResultCodesEnum.Success) {
        let payload: PayloadType = {
            id: response.data.userId,
            email: null,
            login: null,
        }
        dispatch(actions.setUserActionCreator(payload));
        dispatch(actions.setIsAuthActionCreator(true));
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