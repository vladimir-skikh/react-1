import { connect } from "react-redux";
import { compose } from "redux";
import { updateUserStatusThunkCreator } from "../../../redux/userProfileReducer";
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";

const mapStateToProps = (state) => {
    return {
        status: state.userProfileReducer.userStatus,
    }
}
const actionCreators = {
    updateStatus: updateUserStatusThunkCreator,
}

let MyProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(MyProfileStatusWithHooks);

export default MyProfileStatusContainer;