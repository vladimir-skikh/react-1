import { PostType, NewsPageInitialStateType } from "./types/types";
const ADD_POST = 'message-me/newsPageReducer/ADD-POST';
const DELETE_POST = 'message-me/newsPageReducer/DELETE-POST';

let initialState: NewsPageInitialStateType = {
    postsData: [
        {
            id: 1,
            postText: "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/1.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-5.jpg",
            authorName: "Alexis Clark",
        },
        {
            id: 2,
            postText: "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/2.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-3.jpg",
            authorName: "Linda Lohan",
        },
        {
            id: 3,
            postText: "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
            authorName: "John Doe",
        },
    ] as Array<PostType>,
    newPostText: 'Write what you wish',
}

const newsReducer = (state = initialState, action: ActionsType):NewsPageInitialStateType => {
    
    let stateCopy: NewsPageInitialStateType;

    switch (action.type) {
        case ADD_POST: {

            let newPost:PostType = {
                id: 4,
                postText: action.newPostText,
                postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                authorName: "My name",
            };

            stateCopy = {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],
            };

            break;

        }
        case DELETE_POST: {
            stateCopy = {
                ...state,
                postsData: state.postsData.filter( p => p.id !== action.post_id),
            };

            break;

        }
        default: {
            stateCopy = {...state}
            break;
        }
    }

    return stateCopy;
}

/** -----Action types----- */
type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText:string
}
type DeletePostActionType = {
    type: typeof DELETE_POST,
    post_id:number
}
type ActionsType = AddPostActionType | DeletePostActionType
/** ---------------------- */

/** -------Action creators------- */
export const addPostActionCreator = (newPostText:string):AddPostActionType => {
    let action:AddPostActionType = {
        type: ADD_POST,
        newPostText: newPostText,
    }
    return action;
}

export const deletePostActionCreator = (post_id:number):DeletePostActionType => {
    let action:DeletePostActionType = {
        type: DELETE_POST,
        post_id: post_id,
    }
    return action;
}
/** ------------------------------ */

export default newsReducer;