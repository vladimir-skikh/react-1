import usersAPI from '../api/api'

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_USERS_COUNT = "SET-USERS-COUNT";
const SET_PAGE_SIZE = "SET-PAGE-SIZE";
const SET_PAGES_COUNT = "SET-PAGES-COUNT";
const SET_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const IS_FETCHING = "IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING-IN-PROGRESS";

let initialState = {
    usersData: [],
    pageSize: 10,
    totalUsers: 0,
    pagesCount: 0,
    pages: [1],
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SET_USERS: {

            if (action.showMore) {
                stateCopy = {
                    ...state,
                    usersData: [ ...state.usersData, ...action.users],
                };
            }
            else {
                stateCopy = {
                    ...state,
                    usersData: [...action.users],
                };
            }
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
                pagesCount: action.count,
                pages: [],
            };

            for (let i = 1; i <= action.count; i++) {
                stateCopy.pages.push(i);
            }

            break;
        }
        case SET_CURRENT_PAGE: {
            stateCopy = {
                ...state,
                currentPage: action.pageNum
            };

            break;
        }
        case IS_FETCHING: {
            stateCopy = {
                ...state,
                isFetching: action.isFetching
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
                            followed: true,
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
                            followed: false,
                        };
                        return userCopy;
                    }
                    return user;
                }),
            };

            break;
        }
        case FOLLOWING_IN_PROGRESS: {
            stateCopy = {
                ...state,
                followingInProgress: action.progress 
                ? [...state.followingInProgress, action.user_id]
                : state.followingInProgress.filter( id => id !== action.user_id)
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

export const followingProgressActionCreator = (user_id, progress) => {
    let action = {
        type: FOLLOWING_IN_PROGRESS,
        progress: progress,
        user_id: user_id,
    };
    return action;
};

export const setUsersActionCreator = (users, showMore = false) => {
    let action = {
        type: SET_USERS,
        users: users,
        showMore: showMore,
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

export const setCurrentPageActionCreator = (pageNum) => {
    let action = {
        type: SET_CURRENT_PAGE,
        pageNum: pageNum,
    };
    return action;
};

export const setIsFetchingActionCreator = (isFetching) => {
    let action = {
        type: IS_FETCHING,
        isFetching: isFetching,
    };
    return action;
};

export const getUsersThunkCreator = (count, page) => {
    return (dispatch) => {
        dispatch(setIsFetchingActionCreator(true));
    
        usersAPI.getUsers(count, page).then((response) => {
            dispatch(setUsersActionCreator(response.items));
            dispatch(setPageSizeActionCreator(count));
            dispatch(setPagesCountActionCreator(Math.ceil(response.totalCount / count)));
            dispatch(setCurrentPageActionCreator(page));
            dispatch(setIsFetchingActionCreator(false));
        });
    }
} 

export const toggleFollowThunkCreator = (user_id, isFollow) => {
    if (isFollow) {
        return (dispatch) => {
            dispatch(followingProgressActionCreator(user_id, true));
            usersAPI.followUserById(user_id).then( response => {
                if (response.resultCode === 0) {
                    dispatch(followActionCreator(user_id));
                    dispatch(followingProgressActionCreator(user_id, false));
                }
            });
        }
    }
    else {
        return (dispatch) => {
            dispatch(followingProgressActionCreator(user_id, true));
            usersAPI.unfollowUserById(user_id).then( response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowActionCreator(user_id));
                    dispatch(followingProgressActionCreator(user_id, false));
                }
            });
        } 
    }
} 

export const showMoreUsersThunkCreator = (count, currentPage) => (dispatch) => {
    return usersAPI.getUsers(count, currentPage).then( response => {
        debugger
        dispatch(setUsersActionCreator(response.items, true));
        dispatch(setPageSizeActionCreator(count));
        dispatch(setPagesCountActionCreator(Math.ceil(response.totalCount / count)));
        dispatch(setCurrentPageActionCreator(currentPage));
        dispatch(setIsFetchingActionCreator(false));
    })
}

export default usersReducer;