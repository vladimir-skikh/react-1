import usersAPI from '../api/api';

const SET_USERS = 'messege-me/followReducer/SET-USERS';


let initialState = {
    followData: []
}
const followReducer = (state = initialState, action) => {

    let stateCopy;

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
/** ------Action creators----- */
const setUsersActionCreator = (users) => {
    let action = {
        type: SET_USERS,
        users: users
    }
    return action;
}
/** -------------------------- */

/** ------Thunk creators creators-----*/
export const getUsersThunkCreator = (count, page) => async (dispatch) => {
    let response = await usersAPI.getUsers(count, page);

    if (response.error === null) {
        dispatch(setUsersActionCreator(response.items));
    }
} 
/** -------------------------- */


export default followReducer;