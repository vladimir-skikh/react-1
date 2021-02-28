import { UsersPageUserDataType } from './../types/types';
import { AppStateType } from './../reduxStore';
import { createSelector } from "reselect";

/** Селектор пользователей */
const getUsersDataSelector = (state: AppStateType): Array<UsersPageUserDataType> => {
    return state.usersReducer.usersData;
}
export const getUsersData = createSelector(getUsersDataSelector, (usersData: Array<UsersPageUserDataType>) => {
    return usersData.filter( u => true );
});
/**------------------------*/

export const getTotalUsers = (state: AppStateType): number => {
    return state.usersReducer.totalUsers;
}
export const getPageSize = (state: AppStateType): number => {
    return state.usersReducer.pageSize;
}
export const getPagesCount = (state: AppStateType): number => {
    return state.usersReducer.pagesCount;
}
export const getPages = (state: AppStateType): Array<number> => {
    return state.usersReducer.pages;
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersReducer.currentPage;
}
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersReducer.isFetching;
}
export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersReducer.followingInProgress;
}

