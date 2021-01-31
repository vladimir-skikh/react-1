import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import Preloader from '../common/Preloader/Preloader';
import {
    unsetUserProfileActionCreator,
    initProfile
} from '../../redux/userProfileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getProfile } from '../../redux/selectors/profileSelector';


class UserProfileAPIContainer extends React.Component 
{
    setUserInfo = (userId) => {
        this.props.initProfile(userId);
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
        profile: getProfile(state),
    }
}
let actionCreators = {
    unsetUserProfile: unsetUserProfileActionCreator,
    initProfile: initProfile
}

let UserProfileContainer = compose(
    connect(mapStateToProps, actionCreators),
    withRouter,
)(UserProfileAPIContainer)

export default UserProfileContainer;