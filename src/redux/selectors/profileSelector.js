export const getId = (state) => {
    return state.authReducer.userData.id;
}
export const getProfile = (state) => {
    return state.userProfileReducer.userProfile;
}
export const getStatus = (state) => {
    return state.userProfileReducer.userStatus;
}