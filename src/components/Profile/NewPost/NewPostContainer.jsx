import React from "react";
import { connect } from "react-redux";
import NewPost from "./NewPost"
import {changeNewPostTextActionCreator, addPostActionCreator} from '../../../redux/newsPageReducer'

let mapStateToProps = (state) => {
    return {
        newPostText: state.newsReducer.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        changePostText: (newPostText) => {
            let action = changeNewPostTextActionCreator(newPostText);
            dispatch(action);
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;
