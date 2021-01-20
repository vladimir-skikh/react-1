import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA';

/** удалить id из userData */
let initialState = {
    userId: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case SET_USER_DATA: {
            stateCopy = {
                ...state,
                userId: action.userId,
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

export const setUserDataActionCreator = (userId) => {
    let action = {
        type: SET_USER_DATA,
        userId: userId,
    }
    return action;
}

export const setUserThunkCreator = (formData) => {
    return (dispatch) => {
        authAPI.login(formData).then( response => {
            debugger
            if (response.resultCode === 0) {
                dispatch(setUserDataActionCreator(response.data.userId));
            }
        });
    }
}

export default authReducer;