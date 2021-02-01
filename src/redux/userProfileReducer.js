import {profileAPI} from '../api/api'

const SET_USER_PROFILE = 'message-me/userProfile/SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'message-me/userProfile/UNSET-USER-PROFILE';
const SET_USER_STATUS = 'message-me/userProfile/SET-USER-STATUS';
const SET_INIT = 'message-me/userProfile/SET-INIT-PROFILE';


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

/** --------Action creators-------- */
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
export const setUserStatusActionCreator = (status) => {
    let action = {
        type: SET_USER_STATUS,
        status: status,
    }
    return action;
}
const setInitActionCreator = () => {
    let action = {
        type: SET_INIT,
    }
    return action;
}
/** ------------------------------ */

/** -------------Thunk Creators------------- */
const getUserProfileThunkCreator = (userId) => async (dispatch) => {
    let response =  await profileAPI.setUserInfoById(userId);
    dispatch(setUserProfileActionCreator(response));
} 

const getUserStatusThunkCreator = (userId) => async (dispatch) => {
    let response =  await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response));
} 

export const updateUserStatusThunkCreator = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatusActionCreator(status));
    }
} 
/** ---------------------------------------- */

/** --------------Init-------------- */
export const initProfile = (userId) => (dispatch) => {
    let profile =  dispatch(getUserProfileThunkCreator(userId));
    let status =  dispatch(getUserStatusThunkCreator(userId));

    Promise.all([profile, status]).then( () => {
        dispatch(setInitActionCreator());
    })
}
/** -------------------------------- */

export default userProfileReducer;