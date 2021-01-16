const SET_USER_PROFILE = 'SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'UNSET-USER-PROFILE';


let initialState = {
    userProfile: null,
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

export default userProfileReducer;