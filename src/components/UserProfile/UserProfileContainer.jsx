import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import Preloader from '../common/Preloader/Preloader';
import {
    setUserProfileActionCreator,
    unsetUserProfileActionCreator
} from '../../redux/userProfileReducer';
import { withRouter } from 'react-router-dom';

class UserProfileAPIContainer extends React.Component 
{
    setUserInfo = (userId) => {
        let query = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
        axios.get(query).then( response => {
            this.props.setUserProfile(response.data);
        });
    }

    componentDidMount() {
        this.setUserInfo(this.props.match.params.userId);
    }
    componentWillUnmount() {
        this.props.unsetUserProfile();
    }

    render () {
        if (!this.props.profile) {
            return <Preloader />;
        }
        return (
            <UserProfile 
                {...this.props} 
                profile={this.props.profile} 
            />
        );
    }

}

const mapStateToProps = (state) => {
    return {
        profile: state.userProfileReducer.userProfile,
    }
}
let actionCreators = {
    setUserProfile: setUserProfileActionCreator,
    unsetUserProfile: unsetUserProfileActionCreator,
}

let WithUrlDataContainerComponent = withRouter(UserProfileAPIContainer);
let UserProfileContainer = connect(mapStateToProps, actionCreators)(WithUrlDataContainerComponent);

export default UserProfileContainer;