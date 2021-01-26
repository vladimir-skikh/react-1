import { createSelector } from "reselect";

/** Селектор пользователей */
const getUsersDataSelector = (state) => {
    return state.usersReducer.usersData;
}
export const getUsersData = createSelector(getUsersDataSelector, (usersData) => {
    return usersData.filter( u => true );
});
/**------------------------*/

export const getTotalUsers = (state) => {
    return state.usersReducer.totalUsers;
}
export const getPageSize = (state) => {
    return state.usersReducer.pageSize;
}
export const getPagesCount = (state) => {
    return state.usersReducer.pagesCount;
}
export const getPages = (state) => {
    return state.usersReducer.pages;
}
export const getCurrentPage = (state) => {
    return state.usersReducer.currentPage;
}
export const getIsFetching = (state) => {
    return state.usersReducer.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.usersReducer.followingInProgress;
}

