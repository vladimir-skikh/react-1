import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '243c72f1-6008-4b8d-8dff-b9a03a32b432',
    },
})

const usersAPI = {
    getUsers(count = 10, page = 1) {
        return instance.get(`users?count=${count}&page=${page}`).then( response => response.data);
    },
    followUserById(userId)  {
        return instance.post(`follow/${userId}`).then( response => response.data);
    },
    unfollowUserById(userId) {
        return instance.delete(`follow/${userId}`).then( response => response.data);
    },
    setUserInfoById(userId) {
        console.warn('Method deprecated! Use profileAPI method to set user info.');
        return profileAPI.setUserInfoById(userId);
    },
}

export const profileAPI = {
    setUserInfoById(userId) {
        return instance.get(`profile/${userId}`).then( response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then( response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then( response => response.data);
    },
}

export const authAPI = {
    me() {
        return instance.get('auth/me').then( response => response.data);
    },
    login(formData) {
        return instance.post('auth/login', {
            email: formData.email,
            password: formData.password,
            rememberMe: formData.rememberMe,
            captcha: false,
        }).then( response => response.data);
    },
    logout() {
        return instance.delete('auth/login').then( response => response.data);
    },
}

export default usersAPI;