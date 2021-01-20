import { connect } from "react-redux";
import { compose } from "redux";
import UserProfileStatus from "./UserProfileStatus";

const mapStateToProps = (state) => {
    return {
        status: state.userProfileReducer.userStatus,
    }
}
const actionCreators = {}

let UserProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(UserProfileStatus);

export default UserProfileStatusContainer;