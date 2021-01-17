import React from "react";
import { connect } from "react-redux";
import User from './User';
import {
    toggleFollowThunkCreator
} from '../../../redux/usersPageReducer'

class UserAPIContainer extends React.Component 
{
    follow = (user_id) => {
        this.props.toggleFollow(user_id, true);
    };

    unfollow = (user_id) => {
        this.props.toggleFollow(user_id, false);
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
    toggleFollow: toggleFollowThunkCreator
}

let UserContainer = connect(mapStateToProps, actionCreators)(UserAPIContainer);

export default UserContainer;