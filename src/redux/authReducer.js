import {authAPI} from '../api/api'

const SET_USER_DATA = 'SET-USER-DATA';

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
        default: 
            stateCopy = {...state}
    }

    return stateCopy;
}

export const setUserIdActionCreator = (userId) => {
    let action = {
        type: SET_USER_DATA,
        userId: userId,
    }
    return action;
}

export const setUserThunkCreator = (formData) => {
    return (dispatch) => {
        authAPI.login(formData).then( response => {
            if (response.resultCode === 0) {
                dispatch(setUserIdActionCreator(response.data.userId));
            }
        });
    }
}

export default authReducer;