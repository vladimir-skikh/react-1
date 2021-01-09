import React from "react";
import style from "./User.module.css";

let User = (props) => {
    let createElement = React.createRef();

    let onFollowClick = () => {
        let user_id = createElement.current.value;
        props.followUser(user_id);
    };
    let onUnfollowClick = () => {
        let user_id = createElement.current.value;
        props.unfollowUser(user_id);
    };

    return (
        <div className={style.user}>
            <div className={style.userImageBlock}>
                <img src={props.avatar} alt="" className={style.userAvatar} />
            </div>
            <div className={style.userInfoBlock}>
                <div className={style.userInfo}>
                    <span className={style.userName}>{props.userName}</span>
                    <span className={style.status}>{props.status}</span>
                </div>
                <div className={style.followButtonBlock}>
                    {props.following 
                    ?   <button
                            value={props.id}
                            onClick={onUnfollowClick}
                            ref={createElement}
                            className={style.followButton}
                        >
                            Unfollow
                        </button> 
                    :   <button
                            value={props.id}
                            onClick={onFollowClick}
                            ref={createElement}
                            className={style.followButton}
                        >
                            Follow
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};
export default User;
