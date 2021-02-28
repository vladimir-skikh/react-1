import { UsersPageUserDataType, FollowReducerInitialStateType } from './types/types';
import usersAPI from '../api/api';

const SET_USERS = 'messege-me/followReducer/SET-USERS';


let initialState: FollowReducerInitialStateType = {
    followData: []
}
const followReducer = (state = initialState, action: any): FollowReducerInitialStateType => {

    let stateCopy: FollowReducerInitialStateType;

    switch (action.type) {
        case SET_USERS: {
            stateCopy = {
                ...state,
                followData: [...action.users]
            }
            break;
        }
        default:
            stateCopy = {...state}
            break;
    }

    return stateCopy;
}

/** -----Action types------- */
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersPageUserDataType>
}
/** ------------------------ */

/** ------Action creators----- */
const setUsersActionCreator = (users: Array<UsersPageUserDataType>): SetUsersActionType => {
    let action: SetUsersActionType = {
        type: SET_USERS,
        users: users
    }
    return action;
}
/** -------------------------- */

/** ------Thunk creators creators-----*/
export const getUsersThunkCreator = (count: number, page: number) => async (dispatch: any) => {
    let response = await usersAPI.getUsers(count, page);

    if (response.error === null) {
        dispatch(setUsersActionCreator(response.items));
    }
} 
/** -------------------------- */


export default followReducer;