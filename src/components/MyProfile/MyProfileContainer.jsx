import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import MyProfile from "./MyProfile";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {
    unsetUserProfileActionCreator,
    getUserProfileThunkCreator
} from '../../redux/userProfileReducer';
import Preloader from '../common/Preloader/Preloader';

class MyUserProfileAPIContainer extends React.Component 
{
    componentDidMount() {
        this.props.getUserProfile(this.props.id);
    }
    
    componentWillUnmount() {
        this.props.unsetUserProfile();
    }

    render () {
        if (!this.props.profile) {
            return <Preloader />;
        }
        return (
            <MyProfile 
                {...this.props} 
                profile={this.props.profile} 
            />
        );
    }

}


const mapStateToProps = (state) => {
    return {
        id: state.authReducer.userData.id,
        profile: state.userProfileReducer.userProfile,
    };
};

const actionCreators = {
    unsetUserProfile: unsetUserProfileActionCreator,
    getUserProfile: getUserProfileThunkCreator
};

let MyProfileContainer = compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect
)(MyUserProfileAPIContainer);

export default MyProfileContainer;
