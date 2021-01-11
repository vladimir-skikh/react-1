import React from "react";
import style from "./User.module.css";

class User extends React.Component {
    createElement = React.createRef();

    onFollowClick = () => {
        let user_id = this.createElement.current.value;
        this.props.followUser(user_id);
    };
    onUnfollowClick = () => {
        let user_id = this.createElement.current.value;
        this.props.unfollowUser(user_id);
    };

    render() {
        return (
            <div className={style.user}>
                <div className={style.userImageBlock}>
                    {
                        this.props.avatar
                        ? <img src={this.props.avatar} alt="" className={style.userAvatar} />
                        : <img src="https://themified.com/friend-finder/images/users/user-13.jpg" alt="" className={style.userAvatar} />
                    }
                </div>
                <div className={style.userInfoBlock}>
                    <div className={style.userInfo}>
                        <span className={style.userName}>{this.props.userName}</span>
                        {
                            this.props.avatar
                            ? <span className={style.status}>{this.props.status}</span>
                            : <span className={style.status}>Some status</span>
                        }
                    </div>
                    <div className={style.followButtonBlock}>
                        {this.props.following 
                        ?   <button
                                value={this.props.id}
                                onClick={this.onUnfollowClick}
                                ref={this.createElement}
                                className={style.followButton}
                            >
                                Unfollow
                            </button> 
                        :   <button
                                value={this.props.id}
                                onClick={this.onFollowClick}
                                ref={this.createElement}
                                className={style.followButton}
                            >
                                Follow
                            </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default User;
