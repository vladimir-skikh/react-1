const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const SET_PAGES_COUNT = "SET-PAGES-COUNT";

let initialState = {
    usersData: [],
    pageSize: 0,
    totalUsers: 0,
    pagesCount: 0,
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
        case SET_USERS_COUNT: {
            stateCopy = {
                ...state,
                totalUsers: action.count
            };

            break;
        }
        case SET_PAGE_SIZE: {
            stateCopy = {
                ...state,
                pageSize: action.size
            };

            break;
        }
        case SET_PAGES_COUNT: {
            stateCopy = {
                ...state,
                pagesCount: action.count
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

export const setTotalUsersActionCreator = (count) => {
    let action = {
        type: SET_USERS_COUNT,
        count: count,
    };
    return action;
};

export const setPageSizeActionCreator = (size) => {
    let action = {
        type: SET_PAGE_SIZE,
        size: size,
    };
    return action;
};

export const setPagesCountActionCreator = (count) => {
    let action = {
        type: SET_PAGES_COUNT,
        count: count,
    };
    return action;
};

export default usersReducer;