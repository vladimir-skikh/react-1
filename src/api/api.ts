import { UserProfileType, UsersPageUserDataType, PhotosType } from './../redux/types/types';
import axios from "axios";

/** Response result codes */
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}
/** --------------------- */

/** ----------API Request types---------- */
type LoginRequestType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha?: string | null
}
/** ------------------------------------- */

/** ----------authAPI Response types---------- */
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LogoutResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
/** ----------------------------------------- */

/** ----------usersAPI Response types---------- */
type GetUsersResponseType = {
    items: Array<UsersPageUserDataType>
    totalCount: number 
    error: string | null
}

type FollowUserByIdResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type UnfollowUserByIdResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
/** ------------------------------------------- */

/** ----------profileAPI Response types---------- */
type GetUserInfoByIdResponseType = UserProfileType
type UpdateStatusResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type UploadPhotoResponseType = {
    data: PhotosType
    resultCode: ResultCodesEnum
    messages: Array<string>
}
type SaveProfileDataResponseType = {
    data: {}
    resultCode: ResultCodesEnum
    messages: Array<string>
}
/** ------------------------------------------- */

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '243c72f1-6008-4b8d-8dff-b9a03a32b432',
    },
})

const usersAPI = {
    getUsers: async (count: number = 10, page: number = 1) => {
        return instance.get<GetUsersResponseType>(`users?count=${count}&page=${page}`).then( response => response.data);
    },
    followUserById: async (userId: number) => {
        return instance.post<FollowUserByIdResponseType>(`follow/${userId}`).then( response => response.data);
    },
    unfollowUserById: async (userId: number) => {
        return instance.delete<UnfollowUserByIdResponseType>(`follow/${userId}`).then( response => response.data);
    },
    getUserInfoById: async (userId: number) => {
        console.warn('Method deprecated! Use profileAPI method to set user info.');
        return profileAPI.getUserInfoById(userId);
    },
}

export const profileAPI = {
    getUserInfoById: async (userId: number) => {
        return instance.get<GetUserInfoByIdResponseType>(`profile/${userId}`).then( response => response.data);
    },
    getStatus: async (userId: number) => {
        return instance.get<any>(`profile/status/${userId}`).then( response => response.data);
    },
    updateStatus: async (status: string) => {
        return instance.put<UpdateStatusResponseType>(`profile/status`, { status: status }).then( response => response.data);
    },
    uploadPhoto: async (image: any) => {
        const formData = new FormData();
        formData.append('image', image);
        
        return instance.put<UploadPhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then( response => response.data);
    },
    saveProfileData: async (formData: UserProfileType) => {
        return instance.put<SaveProfileDataResponseType>(`profile`, formData).then( response => response.data);
    }
}

export const authAPI = {
    me: async () => {
        return instance.get<MeResponseType>('auth/me').then( response => response.data);
    },
    login: async (formData: LoginRequestType) => {
        return instance.post<LoginResponseType>('auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha ? formData.captcha : false,
        }).then( response => response.data);
    },
    logout: async () => {
        return instance.delete<LogoutResponseType>('auth/login').then( response => response.data);
    },
}

export const securityAPI = {
    getCaptchaUrl: async () => {
        return instance.get('security/get-captcha-url').then( response => response.data);
    },
}

export default usersAPI;