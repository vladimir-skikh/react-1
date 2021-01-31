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
import { getId, getProfile } from '../../redux/selectors/profileSelector';

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
        id: getId(state),
        profile: getProfile(state),
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
