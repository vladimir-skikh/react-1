import { instance, ResponseType } from "./api";

/** ----------authAPI types---------- */
export type MeDataType = {
    data: {
        id: number
        email: string
        login: string
    }
}

export type LoginRequestType = {
    email: string,
    password: string,
    rememberMe: boolean
    captcha?: string | null
}

export type LoginDataType = {userId: number}
/** ----------------------------------------- */

export const authAPI = {
    me: async () => {
        return instance.get<ResponseType<MeDataType>>('auth/me').then( response => response.data);
    },
    login: async (formData: LoginRequestType) => {
        return instance.post<ResponseType<LoginDataType>>('auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: formData.captcha ? formData.captcha : false,
        }).then( response => response.data);
    },
    logout: async () => {
        return instance.delete<ResponseType>('auth/login').then( response => response.data);
    },
}