import React from "react";
import style from "./Profile.module.css";
import NewPostContainer from "./NewPost/NewPostContainer";
import ProfileSmallDesc from "./ProfileSmallDesc/ProfileSmallDesc";

let Profile = (props) => {
    return (
        <div className={style.profile}>
            <div className={style.profile_block_left}>
                <ProfileSmallDesc store={props.store} />
            </div>
            <div className={style.profile_block_right}>
                <NewPostContainer
                    store={props.store}
                />
            </div>
        </div>
    );
};
export default Profile;
