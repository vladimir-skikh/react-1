import React from 'react';
import { compose } from "redux";
import { connect } from "react-redux";
import {
    initProfile,
    unsetUserProfileActionCreator,
    saveProfileDataThunkCreator
} from '../../../redux/userProfileReducer';
import Preloader from '../../common/Preloader/Preloader';
import { getId, getProfile } from '../../../redux/selectors/profileSelector';
import MyProfileSettings from './MyProfileSettings';


class MyProfileSettingsAPIContainer extends React.Component 
{
    componentDidMount() {
        this.props.initProfile(this.props.id);
    }
    
    componentWillUnmount() {
        this.props.unsetUserProfile();
    }

    onSubmitForm = (formData) => {
        this.props.saveProfile(formData);
    }

    render () {
        if (!this.props.init) {
            return <Preloader />;
        }
        return (
            <MyProfileSettings 
                {...this.props} 
                profile={this.props.profile} 
                onSubmitForm={this.onSubmitForm}
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
    saveProfile: saveProfileDataThunkCreator,
};

let MyProfileSettingsContainer = compose(
    connect(mapStateToProps, actionCreators),
)(MyProfileSettingsAPIContainer);

export default MyProfileSettingsContainer;