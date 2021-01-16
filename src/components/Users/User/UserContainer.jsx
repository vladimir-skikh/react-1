import React from "react";
import { connect } from "react-redux";
import User from './User';
import {followActionCreator, unfollowActionCreator} from '../../../redux/usersPageReducer'
import axios from "axios";

class UserAPIContainer extends React.Component 
{
    follow = (user_id) => {
        let query = `https://social-network.samuraijs.com/api/1.0/follow/${user_id}`;
        axios.post(query, {}, 
            { 
                withCredentials: true ,
                headers: {
                    'API-KEY': '243c72f1-6008-4b8d-8dff-b9a03a32b432',
                }
            }).then( response => {
            if (response.data.resultCode === 0) {
                this.props.followUser(user_id);
            }
        });
    };

    unfollow = (user_id) => {
        let query = `https://social-network.samuraijs.com/api/1.0/follow/${user_id}`;
        axios.delete(query, 
            { 
                withCredentials: true ,
                headers: {
                    'API-KEY': '243c72f1-6008-4b8d-8dff-b9a03a32b432',
                },
            }).then( response => {
            if (response.data.resultCode === 0) {
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