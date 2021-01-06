import React from "react";
import style from "./Profile.module.css";
import NewPost from "./NewPost/NewPost";
import ProfileSmallDesc from "./ProfileSmallDesc/ProfileSmallDesc";

let Profile = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profile_block_left}>
                <ProfileSmallDesc />
            </div>
            <div className={style.profile_block_right}>
                <NewPost
                    newPostText={props.state.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
};
export default Profile;
