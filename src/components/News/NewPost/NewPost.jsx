import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./NewPost.module.css";

let NewPost = (props) => {
    let onAddPost = (formData) => {
        props.addNewPost(formData.newPostText);
    };

    return (
        <div className={style.profile_block_newpost}>
            <NewPostFromRedux onSubmit={onAddPost} />
        </div>
    );
};

const NewPostFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.newpost}>
            <Field
                className={style.newpost_textarea}
                component="textarea"
                name="newPostText"
            />
            <button className={style.newpost_button}>
                Publish
            </button>
        </form>
    );
};

const NewPostFromRedux = reduxForm({
    form: 'newPostForm',
})(NewPostFrom);

export default NewPost;
