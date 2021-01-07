import React from "react";
import NewPost from "./NewPost"
import {changeNewPostTextActionCreator, addPostActionCreator} from '../../../redux/newsPageReducer'

let NewPostContainer = (props) => {

    let state = props.store.getState();

    let addNewPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let changePostText = (newPostText) => {
        let action = changeNewPostTextActionCreator(newPostText);
        props.store.dispatch(action);
    }

    return (<NewPost addNewPost={addNewPost} changePostText={changePostText} newPostText={state.newsReducer.newPostText} />);
};
export default NewPostContainer;
