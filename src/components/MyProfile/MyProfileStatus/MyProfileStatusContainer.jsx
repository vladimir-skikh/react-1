import { connect } from "react-redux";
import { compose } from "redux";
import { getStatus } from "../../../redux/selectors/profileSelector";
import { updateUserStatusThunkCreator } from "../../../redux/userProfileReducer";
import MyProfileStatusWithHooks from "./MyProfileStatusWithHooks";

const mapStateToProps = (state) => {
    return {
        status: getStatus(state),
    }
}
const actionCreators = {
    updateStatus: updateUserStatusThunkCreator,
}

let MyProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(MyProfileStatusWithHooks);

export default MyProfileStatusContainer;