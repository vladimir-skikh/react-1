import { UserProfileType } from './../types/types';
import { AppStateType } from './../reduxStore';

export const getId = (state: AppStateType): number | null => {
    return state.authReducer.userData.id;
}
export const getProfile = (state: AppStateType): UserProfileType | null  => {
    return state.userProfileReducer.userProfile;
}
export const getStatus = (state: AppStateType): string | null => {
    return state.userProfileReducer.userStatus;
}