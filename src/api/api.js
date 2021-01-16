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
    followUserById(user_id)  {
        return instance.post(`follow/${user_id}`).then( response => response.data);
    },
    unfollowUserById(user_id) {
        return instance.delete(`follow/${user_id}`).then( response => response.data);
    }
}
export default usersAPI;