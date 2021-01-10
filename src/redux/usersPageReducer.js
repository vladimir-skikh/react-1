const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";

let initialState = {
    usersData: [],
};

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_USERS: {
            stateCopy = {
                ...state,
                usersData: [...state.usersData, ...action.users],
            };

            break;
        }
        case FOLLOW_USER: {
            stateCopy = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === parseInt(action.user_id)) {
                        let userCopy = {
                            ...user,
                            following: true,
                        };
                        return userCopy;
                    }
                    return user;
                }),
            };

            break;
        }
        case UNFOLLOW_USER: {
            stateCopy = {
                ...state,
                usersData: state.usersData.map((user) => {
                    if (user.id === parseInt(action.user_id)) {
                        let userCopy = {
                            ...user,
                            following: false,
                        };
                        return userCopy;
                    }
                    return user;
                }),
            };

            break;
        }
        default: {
            stateCopy = { ...state };
            break;
        }
    }

    return stateCopy;
};

export const followActionCreator = (user_id) => {
    let action = {
        type: FOLLOW_USER,
        user_id: user_id,
    };
    return action;
};

export const unfollowActionCreator = (user_id) => {
    let action = {
        type: UNFOLLOW_USER,
        user_id: user_id,
    };
    return action;
};

export const setUsersActionCreator = (users) => {
    let action = {
        type: SET_USERS,
        users: users,
    };
    return action;
};

export default usersReducer;
