import { usersAPI } from './../api/users-api';
import { UsersPageUserDataType, FollowReducerInitialStateType } from './types/types';
import { InferActionsTypes } from './reduxStore';

let initialState: FollowReducerInitialStateType = {
    followData: []
}
const followReducer = (state = initialState, action: ActionsTypes): FollowReducerInitialStateType => {

    let stateCopy: FollowReducerInitialStateType;

    switch (action.type) {
        case 'messege-me/followReducer/SET-USERS': {
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
export const actions = {
    setUsersActionCreator: (users: Array<UsersPageUserDataType>) => ({type: 'messege-me/followReducer/SET-USERS', users: users} as const),
} 

type ActionsTypes = InferActionsTypes<typeof actions>
/** ------------------------ */

/** ------Thunk creators creators-----*/
export const getUsersThunkCreator = (count: number, page: number) => async (dispatch: any) => {
    let response = await usersAPI.getUsers(count, page);

    if (response.error === null) {
        dispatch(actions.setUsersActionCreator(response.items));
    }
} 
/** -------------------------- */


export default followReducer;