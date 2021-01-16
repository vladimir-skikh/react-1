import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './UserProfile';
import Preloader from '../common/Preloader/Preloader';
import {
    setUserProfileActionCreator,
    setIsFetchingActionCreator
} from '../../redux/userProfileReducer';

class UserProfileAPIContainer extends React.Component 
{
    setUserInfo = () => {
        this.props.setIsFetching(true);
        let query = `https://social-network.samuraijs.com/api/1.0/profile/14105`;
        axios.get(query).then( response => {
            this.props.setUserProfile(response.data);
            this.props.setIsFetching(false);
        });
    }

    componentDidMount() {
        this.setUserInfo();
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
        isFetching: state.userProfileReducer.isFetching,
    }
}
let actionCreators = {
    setUserProfile: setUserProfileActionCreator,
    setIsFetching: setIsFetchingActionCreator,
}

let UserProfileContainer = connect(mapStateToProps, actionCreators)(UserProfileAPIContainer);

export default UserProfileContainer;