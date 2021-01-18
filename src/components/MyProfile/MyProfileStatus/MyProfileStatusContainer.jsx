import { connect } from "react-redux";
import { compose } from "redux";
import { updateUserStatusThunkCreator } from "../../../redux/userProfileReducer";
import MyProfileStatus from "./MyProfileStatus";

const mapStateToProps = (state) => {
    return {
        status: state.userProfileReducer.userStatus,
    }
}
const actionCreators = {
    updateStatus: updateUserStatusThunkCreator
}

let MyProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(MyProfileStatus);

export default MyProfileStatusContainer;