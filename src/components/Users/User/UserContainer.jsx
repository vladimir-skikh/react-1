import React from "react";
import { connect } from "react-redux";
import User from './User';
import {
    followActionCreator,
    unfollowActionCreator,
    followingProgressActionCreator,
} from '../../../redux/usersPageReducer'
import usersAPI from "../../../api/api";

class UserAPIContainer extends React.Component 
{
    follow = (user_id) => {
        this.props.followProgress(user_id, true);
        usersAPI.followUserById(user_id).then( response => {
            if (response.resultCode === 0) {
                this.props.followUser(user_id);
                this.props.followProgress(user_id, false);
            }
        });
    };

    unfollow = (user_id) => {
        this.props.followProgress(user_id, true);
        usersAPI.unfollowUserById(user_id).then( response => {
            if (response.resultCode === 0) {
                this.props.unfollowUser(user_id);
                this.props.followProgress(user_id, false);
            }
        });
    };

    render() {
        return (
            <User 
                id={this.props.id}
                userName={this.props.userName}
                following={this.props.following}
                avatar={this.props.avatar}
                status={this.props.status}
                followUser={this.follow}
                unfollowUser={this.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        );
    }
}

let mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        userName: ownProps.userName,
        following: ownProps.following,
        avatar: ownProps.avatar,
        status: ownProps.status,
        followingInProgress: ownProps.followingInProgress
    }
}
const actionCreators = {
    followUser: followActionCreator,
    unfollowUser: unfollowActionCreator,
    followProgress: followingProgressActionCreator,
}

let UserContainer = connect(mapStateToProps, actionCreators)(UserAPIContainer);

export default UserContainer;