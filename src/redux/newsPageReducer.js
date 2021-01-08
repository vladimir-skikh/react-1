const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {
            postText: "Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/1.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-5.jpg",
            authorName: "Alexis Clark",
        },
        {
            postText: "Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/2.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-3.jpg",
            authorName: "Linda Lohan",
        },
        {
            postText: "Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex temporibus quia autem ab perferendis odio sunt magni, amet accusamus modi recusandae reiciendis, quae molestiae officiis iste nam aspernatur eos",
            postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
            authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
            authorName: "John Doe",
        },
    ],
    newPostText: 'Write what you wish',
}

const newsReducer = (state = initialState, action) => {
    
    let stateCopy = {...state};
    
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postText: state.newPostText,
                postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                authorName: "My name",
            };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            break;
        case CHANGE_NEW_POST_TEXT:
            stateCopy.newPostText = action.text;
            break;
        default:
            break;
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