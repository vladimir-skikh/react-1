import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import MyProfile from "./MyProfile";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {
    initProfile,
    unsetUserProfileActionCreator,
} from '../../redux/userProfileReducer';
import Preloader from '../common/Preloader/Preloader';

class MyProfileAPIContainer extends React.Component 
{
    componentDidMount() {
        this.props.initProfile(this.props.id);
    }
    
    componentWillUnmount() {
        this.props.unsetUserProfile();
    }

    render () {
        if (!this.props.init) {
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
        init: state.userProfileReducer.init,
    };
};

const actionCreators = {
    unsetUserProfile: unsetUserProfileActionCreator,
    initProfile: initProfile
};

let MyProfileContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, actionCreators),
)(MyProfileAPIContainer);

export default MyProfileContainer;
