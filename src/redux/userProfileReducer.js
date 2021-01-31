import {profileAPI} from '../api/api'

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'UNSET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';
const SET_INIT = 'SET-INIT-PROFILE';


let initialState = {
    userProfile: null,
    userStatus: "",
    init: false,
}

const userProfileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_INIT: {
            stateCopy = {
                ...state,
                userProfile: {...state.userProfile},
                init: true,
            }
            break;
        }
        case SET_USER_PROFILE: {
            stateCopy = {
                ...state,
                userProfile: {...action.userProfile},
            }
            break;
        }
        case UNSET_USER_PROFILE: {
            stateCopy = {
                ...state,
                userProfile: null,
                userStatus: "",
                init: false,
            }
            break;
        }
        case SET_USER_STATUS: {
            stateCopy = {
                ...state,
                userStatus: action.status,
            }
            break;
        }
        default: 
            stateCopy = {...state};
    }


    return stateCopy;
}

export const setUserProfileActionCreator = (userProfile) => {
    let action = {
        type: SET_USER_PROFILE,
        userProfile: userProfile,
    }
    return action;
}
export const unsetUserProfileActionCreator = () => {
    let action = {
        type: UNSET_USER_PROFILE,
    }
    return action;
}

const getUserProfileThunkCreator = (userId) => (dispatch) => {
    return profileAPI.setUserInfoById(userId).then( response => {
        dispatch(setUserProfileActionCreator(response));
    });
} 

export const setUserStatusActionCreator = (status) => {
    let action = {
        type: SET_USER_STATUS,
        status: status,
    }
    return action;
}

const getUserStatusThunkCreator = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then( response => {
        dispatch(setUserStatusActionCreator(response));
    });
} 

export const updateUserStatusThunkCreator = (status) => (dispatch) => {
    return profileAPI.updateStatus(status).then( response => {
        if (response.resultCode === 0) {
            dispatch(setUserStatusActionCreator(status));
        }
    });
} 

const setInitActionCreator = () => {
    let action = {
        type: SET_INIT,
    }
    return action;
}

export const initProfile = (userId) => (dispatch) => {
    debugger;
    let profile =  dispatch(getUserProfileThunkCreator(userId));
    let status =  dispatch(getUserStatusThunkCreator(userId));

    Promise.all([profile, status]).then( () => {
        dispatch(setInitActionCreator());
    })
}

export default userProfileReducer;