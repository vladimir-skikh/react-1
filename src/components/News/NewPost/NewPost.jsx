import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./NewPost.module.css";
import {required, maxLength3000} from '../../../utils/validators/validators';
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
            <div className={style.newpostTextareaBlock}>
                <Field
                    inputClassName={style.newpostTextarea}
                    wrapperClassName={style.newpostTextareaWrapper}
                    component={Textarea}
                    name="newPostText"
                    validate={[required, maxLength3000]}
                    placeholder="Post message"
                    errorSignSide='right'
                    checkSubmit={true}
                />
            </div>
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
