import { UsersPageUserDataType } from './../types/types';
import { AppStateType } from './../reduxStore';

export const getFollowComponentUsers = (state: AppStateType): Array<UsersPageUserDataType> => {
    return state.followReducer.followData;
}