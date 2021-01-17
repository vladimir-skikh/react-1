import { connect } from "react-redux";
import { compose } from "redux";
import MyProfileStatus from "./MyProfileStatus";

const mapStateToProps = (state) => {
    return {
        status: 'Some status',
    }
}
const actionCreators = {}

let MyProfileStatusContainer = compose(
    connect(mapStateToProps, actionCreators)
)(MyProfileStatus);

export default MyProfileStatusContainer;