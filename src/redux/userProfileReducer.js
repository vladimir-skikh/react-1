const SET_USER_PROFILE = 'SET-USER-PROFILE';
const IS_FETCHING = "IS-FETCHING";


let initialState = {
    userProfile: null,
    isFetching: false,
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
        case IS_FETCHING: {
            stateCopy = {
                ...state,
                isFetching: action.isFetching
            };

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
export const setIsFetchingActionCreator = (isFetching) => {
    let action = {
        type: IS_FETCHING,
        isFetching: isFetching,
    };
    return action;
};

export default userProfileReducer;