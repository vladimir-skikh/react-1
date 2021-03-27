import { ResultCodesEnum } from './../api/api';
import { AppStateType } from './reduxStore';
import { UsersPageInitialStateType, UsersPageUserDataType } from './types/types';
import { usersAPI } from '../api/users-api';
import { updateObjectInArray } from '../utils/helpers/helperObject';
import { ThunkAction } from 'redux-thunk';
import { Dispatch } from 'react';

const FOLLOW_USER = "message-me/usersReducer/FOLLOW-USER";
const UNFOLLOW_USER = "message-me/usersReducer/UNFOLLOW-USER";
const SET_USERS = "message-me/usersReducer/SET-USERS";
const UNSET_USERS = "message-me/usersReducer/UNSET-USERS";
const SET_USERS_COUNT = "message-me/usersReducer/SET-USERS-COUNT";
const SET_PAGE_SIZE = "message-me/usersReducer/SET-PAGE-SIZE";
const SET_PAGES_COUNT = "message-me/usersReducer/SET-PAGES-COUNT";
const SET_CURRENT_PAGE = "message-me/usersReducer/CHANGE-CURRENT-PAGE";
const IS_FETCHING = "message-me/usersReducer/IS-FETCHING";
const FOLLOWING_IN_PROGRESS = "message-me/usersReducer/FOLLOWING-IN-PROGRESS";

let initialState: UsersPageInitialStateType = {
    usersData: [],
    pageSize: 10,
    totalUsers: 0,
    pagesCount: 0,
    pages: [1],
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action: ActionsType): UsersPageInitialStateType => {

    let stateCopy: UsersPageInitialStateType;

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
        case UNSET_USERS: {
            stateCopy = {
                ...state,
                usersData: [],
                currentPage: 1
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
                usersData: updateObjectInArray(state.usersData, action.user_id, 'id', {followed: true}),
            };

            break;
        }
        case UNFOLLOW_USER: {
            stateCopy = {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.user_id, 'id', {followed: false}),
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

/** ------Action types------ */
type FollowActionType = {
    type: typeof FOLLOW_USER
    user_id: number
}
type UnfollowActionType = {
    type: typeof UNFOLLOW_USER
    user_id: number
}
type FollowingProgressActionType = {
    type: typeof FOLLOWING_IN_PROGRESS
    progress: boolean
    user_id: number
}
type SetUserActionType = {
    type: typeof SET_USERS
    users: Array<UsersPageUserDataType>
    showMore: boolean
}
type SetTotalUsersActionType = {
    type: typeof SET_USERS_COUNT
    count: number
}
type SetPageSizeActionType = {
    type: typeof SET_PAGE_SIZE
    size: number
}
type SetPagesCountActionType = {
    type: typeof SET_PAGES_COUNT
    count: number
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    pageNum: number
};
type SetIsFetchingActionType = {
    type: typeof IS_FETCHING
    isFetching: boolean
};
type UnsetUsersActionType = {
    type: typeof UNSET_USERS
};


type ActionsType = FollowActionType | 
                   UnfollowActionType | 
                   FollowingProgressActionType |
                   SetUserActionType |
                   SetTotalUsersActionType |
                   SetPageSizeActionType |
                   SetPagesCountActionType |
                   SetCurrentPageActionType |
                   SetIsFetchingActionType |
                   UnsetUsersActionType
/** ------------------------ */

/** ---------------Action creators--------------- */
export const followActionCreator = (user_id: number): FollowActionType => {
    let action: FollowActionType = {
        type: FOLLOW_USER,
        user_id: user_id,
    };
    return action;
};
export const unfollowActionCreator = (user_id: number): UnfollowActionType => {
    let action: UnfollowActionType = {
        type: UNFOLLOW_USER,
        user_id: user_id,
    };
    return action;
};
export const followingProgressActionCreator = (user_id: number, progress: boolean): FollowingProgressActionType => {
    let action: FollowingProgressActionType = {
        type: FOLLOWING_IN_PROGRESS,
        progress: progress,
        user_id: user_id,
    };
    return action;
};
export const setUsersActionCreator = (users: Array<UsersPageUserDataType>, showMore: boolean = false): SetUserActionType => {
    let action: SetUserActionType = {
        type: SET_USERS,
        users: users,
        showMore: showMore,
    };
    return action;
};
export const setTotalUsersActionCreator = (count: number): SetTotalUsersActionType => {
    let action: SetTotalUsersActionType = {
        type: SET_USERS_COUNT,
        count: count,
    };
    return action;
};
export const setPageSizeActionCreator = (size: number): SetPageSizeActionType => {
    let action: SetPageSizeActionType = {
        type: SET_PAGE_SIZE,
        size: size,
    };
    return action;
};
export const setPagesCountActionCreator = (count: number): SetPagesCountActionType => {
    let action: SetPagesCountActionType = {
        type: SET_PAGES_COUNT,
        count: count,
    };
    return action;
};
export const setCurrentPageActionCreator = (pageNum: number): SetCurrentPageActionType => {
    let action: SetCurrentPageActionType = {
        type: SET_CURRENT_PAGE,
        pageNum: pageNum,
    };
    return action;
};
export const setIsFetchingActionCreator = (isFetching: boolean): SetIsFetchingActionType => {
    let action: SetIsFetchingActionType = {
        type: IS_FETCHING,
        isFetching: isFetching,
    };
    return action;
};
export const unsetUsersActionCreator = (): UnsetUsersActionType => {
    let action: UnsetUsersActionType = {
        type: UNSET_USERS
    }
    return action;
}
/** --------------------------------------------- */

/** ---------------Thunk Creators---------------- */
type ThunkCreatorsType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
type DispatchType = Dispatch<ActionsType>

export const getUsersThunkCreator = (count: number, page: number):ThunkCreatorsType  => async (dispatch, getState) => {

    dispatch(setIsFetchingActionCreator(true));

    let response = await usersAPI.getUsers(count, page);

    if (response.error === null) {
        dispatch(setUsersActionCreator(response.items));
        dispatch(setPageSizeActionCreator(count));
        dispatch(setPagesCountActionCreator(Math.ceil(response.totalCount / count)));
        dispatch(setCurrentPageActionCreator(page));
        dispatch(setIsFetchingActionCreator(false));
    }
} 
export const toggleFollowThunkCreator = (user_id: number, isFollow: boolean): ThunkCreatorsType => {
    if (isFollow) {
        return async (dispatch) => {
            toggleFollowUnfollow(dispatch, user_id, usersAPI.followUserById.bind(usersAPI), followActionCreator);
        }
    }
    else {
        return async (dispatch) => {
            toggleFollowUnfollow(dispatch, user_id, usersAPI.unfollowUserById.bind(usersAPI), unfollowActionCreator);
        } 
    }
} 
export const showMoreUsersThunkCreator = (count: number, currentPage: number): ThunkCreatorsType => async (dispatch) => {

    let response = await usersAPI.getUsers(count, currentPage);

    if (response.error === null) {
        dispatch(setUsersActionCreator(response.items, true));
        dispatch(setPageSizeActionCreator(count));
        dispatch(setPagesCountActionCreator(Math.ceil(response.totalCount / count)));
        dispatch(setCurrentPageActionCreator(currentPage));
        dispatch(setIsFetchingActionCreator(false));
    }
}
/** --------------------------------------------- */

/** ----------Other helpfull functions---------- */
const toggleFollowUnfollow = async (
    dispatch: DispatchType, 
    user_id: number, 
    apiMethod: (user_id: number) => Promise<any>, 
    actionCreator: (user_id: number) => FollowActionType | UnfollowActionType
) => {
    dispatch(followingProgressActionCreator(user_id, true));

    let response = await apiMethod(user_id);

    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(user_id));
        dispatch(followingProgressActionCreator(user_id, false));
    }
}
/** ------------------------------------------- */

export default usersReducer;