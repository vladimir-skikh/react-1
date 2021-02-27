import { PhotosType } from './types';
/** AppReducer initialState type */
export type InitialAppReducerStateType = {
    initialized: boolean
}

/** LoggedUserData type */
export type LoggedUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    captchaUrl: string | null,
}

/** AutyReducer initialState type */
export type InitialAuthReducerStateType = {
    userData: LoggedUserDataType,
    isAuth: boolean,
}

/** newsPage Post type */
export type PostType = {
    id: number
    postText: string
    postPhoto: string
    authorAvatar: string
    authorName: string
}

/** NewsPage initialState type */
let newsPageInitialState = {
    postsData: [] as Array<PostType>,
    newPostText: '',
}

export type NewsPageInitialStateType = typeof newsPageInitialState;

/** Contacts type */
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

/** Photos type */
export type PhotosType = {
    small: string
    large: string
}

/** UserProflie type */
export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}
/** UserProfilePage initialState type */
export type UserProfileInitialStateType = {
    userProfile: UserProfileType | null,
    userStatus: string | null,
    init: boolean,
}

/** UsersPage userData type */
export type UsersPageUserDataType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

/** UsersPage initialState type */
export type UsersPageInitialStateType = {
    usersData: Array<UsersPageUserDataType>,
    pageSize: number,
    totalUsers: number,
    pagesCount: number,
    pages: Array<number>,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}