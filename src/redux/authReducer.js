const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userData: {},
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

export default authReducer;