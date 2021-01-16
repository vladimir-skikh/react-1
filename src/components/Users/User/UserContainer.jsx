import React from "react";
import { connect } from "react-redux";
import User from './User';
import {followActionCreator, unfollowActionCreator} from '../../../redux/usersPageReducer'
import usersAPI from "../../../api/api";

class UserAPIContainer extends React.Component 
{
    follow = (user_id) => {
        usersAPI.followUserById(user_id).then( response => {
            if (response.resultCode === 0) {
                this.props.followUser(user_id);
            }
        });
    };

    unfollow = (user_id) => {
        usersAPI.unfollowUserById(user_id).then( response => {
            if (response.resultCode === 0) {
                this.props.unfollowUser(user_id);
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
    }
}
const actionCreators = {
    followUser: followActionCreator,
    unfollowUser: unfollowActionCreator,
}

let UserContainer = connect(mapStateToProps, actionCreators)(UserAPIContainer);

export default UserContainer;