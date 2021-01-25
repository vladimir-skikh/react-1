import React from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import { updateUserStatusThunkCreator, getUserStatusThunkCreator } from "../../../redux/userProfileReducer";
import MyProfileStatus from "./MyProfileStatus";

class MyProfileStatusAPIContainer extends React.Component 
{
    componentDidMount() {
        //this.props.getStatus(this.props.userId);
    }

    render() {
        return <MyProfileStatus status={this.props.status}/>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        status: state.userProfileReducer.userStatus,
        userId: ownProps.userId,
    }
}
const actionCreators = {
    updateStatus: updateUserStatusThunkCreator,
    getStatus: getUserStatusThunkCreator,
}

let MyProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(MyProfileStatusAPIContainer);

export default MyProfileStatusContainer;