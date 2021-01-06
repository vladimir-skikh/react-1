const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

const newsReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postText: state.newPostText,
                postPhoto: "https://themified.com/friend-finder/images/post-images/11.jpg",
                authorAvatar: "https://themified.com/friend-finder/images/users/user-4.jpg",
                authorName: "My name",
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            break;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.text;
            break;
        default:
            break;
    }

    return state;
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