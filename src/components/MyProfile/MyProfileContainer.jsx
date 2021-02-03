import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import MyProfile from "./MyProfile";
import withAuthRedirect from "../hoc/withAuthRedirect";
import {
    initProfile,
    unsetUserProfileActionCreator,
    uploadPhotoThunkCreator,
} from '../../redux/userProfileReducer';
import Preloader from '../common/Preloader/Preloader';
import { getId, getProfile } from '../../redux/selectors/profileSelector';

class MyProfileAPIContainer extends React.Component 
{
    componentDidMount() {
        this.props.initProfile(this.props.id);
    }
    
    componentWillUnmount() {
        this.props.unsetUserProfile();
    }

    uploadPhoto = (file) => {
        this.props.uploadPhoto(file);
    }

    render () {
        if (!this.props.init) {
            return <Preloader />;
        }
        return (
            <MyProfile 
                {...this.props} 
                profile={this.props.profile} 
                uploadPhoto={this.uploadPhoto}
            />
        );
    }

}


const mapStateToProps = (state) => {
    return {
        id: getId(state),
        profile: getProfile(state),
        init: state.userProfileReducer.init,
    };
};

const actionCreators = {
    unsetUserProfile: unsetUserProfileActionCreator,
    initProfile: initProfile,
    uploadPhoto: uploadPhotoThunkCreator,
};

let MyProfileContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, actionCreators),
)(MyProfileAPIContainer);

export default MyProfileContainer;
