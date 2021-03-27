import { PhotosType, UserProfileType } from "../redux/types/types"
import { instance, ResponseType } from "./api"

/** ----------profileAPI types---------- */
type GetUserInfoByIdResponseType = UserProfileType
type UploadPhotoDataType = PhotosType
/** ------------------------------------------- */

export const profileAPI = {
    getUserInfoById: async (userId: number) => {
        return instance.get<GetUserInfoByIdResponseType>(`profile/${userId}`).then( response => response.data);
    },
    getStatus: async (userId: number) => {
        return instance.get<any>(`profile/status/${userId}`).then( response => response.data);
    },
    updateStatus: async (status: string) => {
        return instance.put<ResponseType>(`profile/status`, { status: status }).then( response => response.data);
    },
    uploadPhoto: async (image: any) => {
        const formData = new FormData();
        formData.append('image', image);
        
        return instance.put<ResponseType<UploadPhotoDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then( response => response.data);
    },
    saveProfileData: async (formData: UserProfileType) => {
        return instance.put<ResponseType>(`profile`, formData).then( response => response.data);
    }
}