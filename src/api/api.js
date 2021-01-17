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
        return instance.get(`profile/${userId}`).then( response => response.data);
    },
}

export const authAPI = {
    login() {
        return instance.get('auth/me').then( response => response.data);
    },
    logout() {
        
    },
}

export default usersAPI;