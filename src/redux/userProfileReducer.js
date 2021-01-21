import usersAPI, {profileAPI} from '../api/api'

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'UNSET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-DATA';
const UPDATE_USER_STATUS = 'UPDATE-USER-DATA';


let initialState = {
    userProfile: null,
    userStatus: "",
}

const userProfileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
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
        case UPDATE_USER_STATUS: {
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

export const setUserStatusActionCreator = (status) => {
    let action = {
        type: SET_USER_STATUS,
        status: status,
    }
    return action;
}
export const updateUserStatusActionCreator = (status) => {
    let action = {
        type: UPDATE_USER_STATUS,
        status: status,
    }
    return action;
}

export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.setUserInfoById(userId).then( response => {
            dispatch(setUserProfileActionCreator(response));
        });
        profileAPI.getStatus(userId).then( response => {
            dispatch(setUserStatusActionCreator(response));
        });
    }
} 

export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then( response => {
            if (response.resultCode === 0) {
                dispatch(updateUserStatusActionCreator(status));
            }
        });
    }
} 

export default userProfileReducer;