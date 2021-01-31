import { connect } from "react-redux";
import { compose } from "redux";
import { getStatus } from "../../../redux/selectors/profileSelector";
import UserProfileStatus from "./UserProfileStatus";

const mapStateToProps = (state) => {
    return {
        status: getStatus(state),
    }
}
const actionCreators = {}

let UserProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(UserProfileStatus);

export default UserProfileStatusContainer;