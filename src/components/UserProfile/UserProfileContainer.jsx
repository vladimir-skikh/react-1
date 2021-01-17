import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import Preloader from '../common/Preloader/Preloader';
import {
    unsetUserProfileActionCreator,
    getUserProfileThunkCreator
} from '../../redux/userProfileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';


class UserProfileAPIContainer extends React.Component 
{
    setUserInfo = (userId) => {
        this.props.getUserProfile(userId);
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
    unsetUserProfile: unsetUserProfileActionCreator,
    getUserProfile: getUserProfileThunkCreator
}

let UserProfileContainer = compose(
    connect(mapStateToProps, actionCreators),
    withRouter,
)(UserProfileAPIContainer)

export default UserProfileContainer;