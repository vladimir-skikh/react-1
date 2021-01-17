import React from "react";
import style from "./NewPost.module.css";

let NewPost = (props) => {

    let createElement = React.createRef();

    let onAddPost = () => {
        props.addNewPost();
    }

    let onPostChange = () => {
        let newPostText = createElement.current.value;
        props.changePostText(newPostText);
    }

    return (
        <div className={style.profile_block_newpost}>
            <div className={style.newpost}>
                <textarea
                    className={style.newpost_textarea}
                    name=""
                    ref={createElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button onClick={onAddPost} className={style.newpost_button}>Publish</button>
            </div>
        </div>
    );
};
export default NewPost;
