import React from "react";
import { NavLink } from "react-router-dom";
import style from "./User.module.css";
import undefinedUser from '../../../img/undefinedUser.png';

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
                    <NavLink to={'/user/' + this.props.id} userId={this.props.id}>
                    {
                        this.props.avatar
                        ? <img src={this.props.avatar} alt="" className={style.userAvatar} />
                        : <img src={undefinedUser} alt="" className={style.userAvatar} />
                    }
                    </NavLink>
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
                                disabled={this.props.followingInProgress.some( id => id == this.props.id)}
                            >
                                Unfollow
                            </button> 
                        :   <button
                                value={this.props.id}
                                onClick={this.onFollowClick}
                                ref={this.createElement}
                                className={style.followButton}
                                disabled={this.props.followingInProgress.some( id => id == this.props.id)}
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
