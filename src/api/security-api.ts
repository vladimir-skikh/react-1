import { instance } from "./api";

export const securityAPI = {
    getCaptchaUrl: async () => {
        return instance.get('security/get-captcha-url').then( response => response.data);
    },
}