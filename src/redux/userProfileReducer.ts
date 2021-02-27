import { UserProfileInitialStateType, UserProfileType, PhotosType } from './types/types';
import {profileAPI} from '../api/api';
import { stopSubmit } from 'redux-form';


const SET_USER_PROFILE = 'message-me/userProfile/SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'message-me/userProfile/UNSET-USER-PROFILE';
const SET_USER_STATUS = 'message-me/userProfile/SET-USER-STATUS';
const SET_INIT = 'message-me/userProfile/SET-INIT-PROFILE';
const SET_PHOTOS = 'message-me/userProfile/SET-PHOTOS';



let initialState: UserProfileInitialStateType = {
    userProfile: null,
    userStatus: "",
    init: false,
}

const userProfileReducer = (state = initialState, action: any): UserProfileInitialStateType => {

    let stateCopy;

    switch (action.type) {
        case SET_INIT: {
            stateCopy = {
                ...state,
                userProfile: {...state.userProfile},
                init: true,
            }
            break;
        }
        case SET_USER_PROFILE: {
            stateCopy = {
                ...state,
                userProfile: {...action.userProfile},
            }
            break;
        }
        case UNSET_USER_PROFILE: {
            stateCopy = {
                ...state,
                userProfile: null,
                userStatus: "",
                init: false,
            }
            break;
        }
        case SET_USER_STATUS: {
            stateCopy = {
                ...state,
                userStatus: action.status,
            }
            break;
        }
        case SET_PHOTOS: {
            stateCopy = {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos},
            }
            break;
        }
        default: 
            stateCopy = {...state};
    }


    return stateCopy;
}

/** -------ActionTypes------- */
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    userProfile: UserProfileType
}
type UnsetUserProfileActionType = {
    type: typeof UNSET_USER_PROFILE
}
type SetUserStatusActionType = {
    type: typeof SET_USER_STATUS,
    status: string
}
type SetInitActionType = {
    type: typeof SET_INIT
}
type UploadPhotoActionType = {
    type: typeof SET_PHOTOS,
    photos: PhotosType,
}

/** ------------------------- */

/** --------Action creators-------- */
export const setUserProfileActionCreator = (userProfile: UserProfileType): SetUserProfileActionType => {
    let action: SetUserProfileActionType = {
        type: SET_USER_PROFILE,
        userProfile: userProfile,
    }
    return action;
}
export const unsetUserProfileActionCreator = (): UnsetUserProfileActionType => {
    let action: UnsetUserProfileActionType = {
        type: UNSET_USER_PROFILE,
    }
    return action;
}
export const setUserStatusActionCreator = (status: string): SetUserStatusActionType => {
    let action: SetUserStatusActionType = {
        type: SET_USER_STATUS,
        status: status,
    }
    return action;
}
const setInitActionCreator = (): SetInitActionType => {
    let action: SetInitActionType = {
        type: SET_INIT,
    }
    return action;
}
const uploadPhotoActionCreator = (photos: PhotosType): UploadPhotoActionType => {
    let action: UploadPhotoActionType = {
        type: SET_PHOTOS,
        photos: photos,
    }
    return action;
}
/** ------------------------------ */

/** -------------Thunk Creators------------- */
const getUserProfileThunkCreator = (userId: number) => async (dispatch: any) => {
    let response =  await profileAPI.setUserInfoById(userId);
    dispatch(setUserProfileActionCreator(response));
} 

const getUserStatusThunkCreator = (userId: number) => async (dispatch: any) => {
    let response =  await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response));
} 

export const updateUserStatusThunkCreator = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatusActionCreator(status));
    }
    else {
        Promise.reject(response.messages[0]);
    }
} 
export const uploadPhotoThunkCreator = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.uploadPhoto(file);
    if (response.resultCode === 0) {
        dispatch(uploadPhotoActionCreator(response.data.photos));
    }
}
export const saveProfileDataThunkCreator = (formData: any) => async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.userData.id;
    const response = await profileAPI.saveProfileData(formData);

    if (response.resultCode === 0) {
        dispatch(getUserProfileThunkCreator(userId));
    }
    else {
        let error_message = response.messages.length > 0 ? response.messages[0] : 'Invalid form data';
        let index = error_message.indexOf('Contacts->');
        let action = {};
        if (index !== -1) {
            let contact_key = error_message.substring(index + 10, error_message.length - 1).toLowerCase();
            action = stopSubmit('myprofileSettings', {'contacts': {[contact_key]: error_message} } );
        }
        else {
            action = stopSubmit('myprofileSettings', {_error: error_message});
        }
        dispatch(action);
    }
}
/** ---------------------------------------- */

/** --------------Init-------------- */
export const initProfile = (userId: number) => (dispatch: any) => {
    let profile =  dispatch(getUserProfileThunkCreator(userId));
    let status =  dispatch(getUserStatusThunkCreator(userId));

    Promise.all([profile, status]).then( () => {
        dispatch(setInitActionCreator());
    })
}
/** -------------------------------- */

export default userProfileReducer;