import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./NewPost.module.css";
import {required, maxLength10} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormControls/FormControls';


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
                component={Textarea}
                name="newPostText"
                validate={[required, maxLength10]}
                placeholder="Post message"
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
