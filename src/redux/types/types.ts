import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppStateType } from './../reduxStore';

/**
 * @Global types for dispatch and getState
 */
export type GetStateType = () => AppStateType


/** AppReducer initialState type */
export type InitialAppReducerStateType = {
    initialized: boolean
}

/** LoggedUserData type */
export type LoggedUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
}

/** AutyReducer initialState type */
export type InitialAuthReducerStateType = {
    userData: LoggedUserDataType,
    isAuth: boolean,
    captchaUrl: string | null
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
/** CntactsMap type */
export type ContactsMapType = {
    [index: string]: string | undefined
}

/** Photos type */
export type PhotosType = {
    small: string
    large: string
}

/** UserProflie type */
export type UserProfileType = {
    userId?: number | undefined
    lookingForAJob?: boolean | undefined
    lookingForAJobDescription?: string | undefined
    fullName?: string | undefined
    contacts?: ContactsType | undefined
    photos?: PhotosType | undefined
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

/** FollowReducer InitialState type */
export type FollowReducerInitialStateType = {
    followData: Array<UsersPageUserDataType>
} 

/** Message type */
export type MessageType = {
    author: string
    avatar: string,
    message: string,
}

/** Dialog type */
export type DialogType = {
    id: number
    name: string
    avatar: string
    lastMessage: string
}

/** MessagesReducer InitialState type */
export type MessagesReducerInitialStateType = {
    dialogsData: Array<DialogType>
    activeDialogMessagesData: Array<MessageType>
}

/** Base Thunk Type */
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;
