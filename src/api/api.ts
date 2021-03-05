import { UserProfileType } from './../redux/types/types';
import axios from "axios";

/** Response result codes */
export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10,
}
/** --------------------- */

/** ----------API Request types---------- */
type LoginFormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha?: string | null
}
/** ----------------------------- */

/** ----------API Response types---------- */
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}
/** ----------------------------- */

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '243c72f1-6008-4b8d-8dff-b9a03a32b432',
    },
})

const usersAPI = {
    getUsers: async (count = 10, page = 1) => {
        return instance.get(`users?count=${count}&page=${page}`).then( response => response.data);
    },
    followUserById: async (userId: number) => {
        return instance.post(`follow/${userId}`).then( response => response.data);
    },
    unfollowUserById: async (userId: number) => {
        return instance.delete(`follow/${userId}`).then( response => response.data);
    },
    setUserInfoById: async (userId: number) => {
        console.warn('Method deprecated! Use profileAPI method to set user info.');
        return profileAPI.setUserInfoById(userId);
    },
}

export const profileAPI = {
    setUserInfoById: async (userId: number) => {
        return instance.get(`profile/${userId}`).then( response => response.data);
    },
    getStatus: async (userId: number) => {
        return instance.get(`profile/status/${userId}`).then( response => response.data);
    },
    updateStatus: async (status: string) => {
        return instance.put(`profile/status`, { status: status }).then( response => response.data);
    },
    uploadPhoto: async (image: any) => {
        const formData = new FormData();
        formData.append('image', image);
        
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then( response => response.data);
    },
    saveProfileData: async (formData: UserProfileType) => {
        return instance.put(`profile`, formData).then( response => response.data);
    }
}

export const authAPI = {
    me: async () => {
        return instance.get<MeResponseType>('auth/me').then( response => response.data);
    },
    login: async (formData: LoginFormDataType) => {
        return instance.post('auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha ? formData.captcha : false,
        }).then( response => response.data);
    },
    logout: async () => {
        return instance.delete('auth/login').then( response => response.data);
    },
}

export const securityAPI = {
    getCaptchaUrl: async () => {
        return instance.get('security/get-captcha-url').then( response => response.data);
    },
}

export default usersAPI;