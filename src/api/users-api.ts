import { UsersPageUserDataType } from "../redux/types/types";
import { instance, ResponseType } from "./api";

/** ----------usersAPI types---------- */
type GetUsersResponseType = {
    items: Array<UsersPageUserDataType>
    totalCount: number 
    error: string | null
}
/** ------------------------------------------- */
export const usersAPI = {
    getUsers: async (count: number = 10, page: number = 1) => {
        return instance.get<GetUsersResponseType>(`users?count=${count}&page=${page}`).then( response => response.data);
    },
    followUserById: async (userId: number) => {
        return instance.post<ResponseType>(`follow/${userId}`).then( response => response.data);
    },
    unfollowUserById: async (userId: number) => {
        return instance.delete<ResponseType>(`follow/${userId}`).then( response => response.data);
    }
}