import { InferActionsTypes } from "./reduxStore";
import { PostType, NewsPageInitialStateType } from "./types/types";

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

const newsReducer = (state = initialState, action: ActionsTypes):NewsPageInitialStateType => {
    
    let stateCopy: NewsPageInitialStateType;

    switch (action.type) {
        case 'message-me/newsPageReducer/ADD-POST': {

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
        case 'message-me/newsPageReducer/DELETE-POST': {
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
export const actions = {
    addPostActionCreator: (newPostText:string) => ({type: 'message-me/newsPageReducer/ADD-POST', newPostText: newPostText} as const),
    deletePostActionCreator: (post_id:number) => ({type: 'message-me/newsPageReducer/DELETE-POST', post_id: post_id} as const)
}

type ActionsTypes = InferActionsTypes<typeof actions>
/** ---------------------- */
export default newsReducer;