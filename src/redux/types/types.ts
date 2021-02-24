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
    userData: {
        id: number | null,
        email: string | null,
        login: string | null,
        captchaUrl: string | null,
    },
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