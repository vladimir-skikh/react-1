import { ResultCodesEnum } from './../api/api';
import { AppStateType } from './reduxStore';
import { UserProfileInitialStateType, UserProfileType, PhotosType } from './types/types';
import { profileAPI } from '../api/api';
import { stopSubmit, FormAction } from 'redux-form';
import { ThunkAction } from 'redux-thunk';

const SET_USER_PROFILE = 'message-me/userProfile/SET-USER-PROFILE';
const UNSET_USER_PROFILE = 'message-me/userProfile/UNSET-USER-PROFILE';
const SET_USER_STATUS = 'message-me/userProfile/SET-USER-STATUS';
const SET_INIT = 'message-me/userProfile/SET-INIT-PROFILE';
const SET_PHOTOS = 'message-me/userProfile/SET-PHOTOS';

let initialState: UserProfileInitialStateType = {
    userProfile: null,
    userStatus: '',
    init: false,
}


/**
 * Problem with action type. Created ActionsType breaks in switch - case
 */
const userProfileReducer = (state = initialState, action: ActionsType): UserProfileInitialStateType => {

    let stateCopy: UserProfileInitialStateType;

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
                userProfile: {...(<SetUserProfileActionType>action).userProfile},
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
                userStatus: (<SetUserStatusActionType>action).status,
            }
            break;
        }
        case SET_PHOTOS: {
            stateCopy = {
                ...state,
                userProfile: {...state.userProfile, photos: (<UploadPhotoActionType>action).photos},
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
    type: typeof SET_USER_STATUS
    status: string
}
type SetInitActionType = {
    type: typeof SET_INIT
}
type UploadPhotoActionType = {
    type: typeof SET_PHOTOS
    photos: PhotosType
}

type ActionsType = 
    SetUserProfileActionType |
    SetInitActionType |
    UnsetUserProfileActionType |
    SetUserStatusActionType |
    UploadPhotoActionType |
    FormAction
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
type ThunkCreatorsType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const getUserProfileThunkCreator = (userId: number):ThunkCreatorsType  => async (dispatch) => {
    let response =  await profileAPI.getUserInfoById(userId);
    dispatch(setUserProfileActionCreator(response));
} 

const getUserStatusThunkCreator = (userId: number): ThunkCreatorsType => async (dispatch) => {
    let response =  await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response));
} 

export const updateUserStatusThunkCreator = (status: string): ThunkCreatorsType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserStatusActionCreator(status));
    }
    else {
        Promise.reject(response.messages[0]);
    }
} 
export const uploadPhotoThunkCreator = (file: any): ThunkCreatorsType => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(file);
    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(uploadPhotoActionCreator(response.data));
    }
}
export const saveProfileDataThunkCreator = (formData: any): ThunkCreatorsType => async (dispatch, getState) => {
    const userId = getState().authReducer.userData.id as number;
    const response = await profileAPI.saveProfileData(formData);

    if (response.resultCode === ResultCodesEnum.Success) {
        dispatch(getUserProfileThunkCreator(userId));
    }
    else {
        let error_message = response.messages.length > 0 ? response.messages[0] : 'Invalid form data';
        let index = error_message.indexOf('Contacts->');
        let action = {} as FormAction;
        if (index !== -1) {
            let contact_key = error_message.substring(index + 10, error_message.length - 1).toLowerCase();
            action = stopSubmit('myprofileSettings', {'contacts': {[contact_key]: error_message} });
        }
        else {
            action = stopSubmit('myprofileSettings', {_error: error_message});
        }
        dispatch(action);
    }
}
/** ---------------------------------------- */

/** --------------Init-------------- */
export const initProfile = (userId: number): ThunkCreatorsType => async (dispatch) => {
    let profile =  dispatch(getUserProfileThunkCreator(userId));
    let status =  dispatch(getUserStatusThunkCreator(userId));

    Promise.all([profile, status]).then( () => {
        dispatch(setInitActionCreator());
    })
}
/** -------------------------------- */

export default userProfileReducer;