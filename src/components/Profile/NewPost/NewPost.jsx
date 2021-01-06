import React from "react";
import style from "./NewPost.module.css";
import {changeNewPostTextActionCreator, addPostActionCreator} from '../../../redux/state'

let NewPost = (props) => {

    let createElement = React.createRef();

    let addNewPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = () => {
        let newPostText = createElement.current.value;
        let action = changeNewPostTextActionCreator(newPostText);
        props.dispatch(action);
    }

    return (
        <div className={style.profile_block_newpost}>
            <img
                className={style.profile_image}
                src="https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg"
                alt=""
            />
            <div className={style.newpost}>
                <textarea
                    className={style.newpost_textarea}
                    name=""
                    ref={createElement}
                    value={props.newPostText}
                    onChange={onPostChange}
                />
                <button onClick={addNewPost} className={style.newpost_button}>Publish</button>
            </div>
        </div>
    );
};
export default NewPost;
