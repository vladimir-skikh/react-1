const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
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
    ],
    newPostText: 'Write what you wish',
}

const newsReducer = (state = initialState, action) => {
    
    let stateCopy;

    switch (action.type) {
        case ADD_POST: {

            let newPost = {
                id: 4,
                postText: state.newPostText,
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
        case CHANGE_NEW_POST_TEXT: {

            stateCopy = {
                ...state,
                newPostText: action.text,
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

export const addPostActionCreator = () => {
    let action = {
        type: ADD_POST,
    }
    return action;
}

export const changeNewPostTextActionCreator = (newPostText) => {
    let action = {
        type: CHANGE_NEW_POST_TEXT,
        text: newPostText,
    }
    return action;
}

export default newsReducer;