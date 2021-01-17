import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA';

/** удалить id из userData */
let initialState = {
    userData: {
        id: 13908,
    },
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                userData: {...action.userData},
                isAuth: true,
            }
            break;
        }
        default: {
            stateCopy = {...state}
            break;
        }
    }

    return stateCopy;
}

export const setUserDataActionCreator = (userData) => {
    let action = {
        type: SET_USER_DATA,
        userData: userData,
    }
    return action;
}

export const setUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.login().then( response => {
            if (response.resultCode === 0) {
                dispatch(setUserDataActionCreator(response.data));
            }
        });
    }
}

export default authReducer;