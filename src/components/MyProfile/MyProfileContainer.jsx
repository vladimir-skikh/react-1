import { connect } from "react-redux";
import MyProfile from "./MyProfile";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {};
};
const actionCreators = {};

let AuthRedirectComponent = withAuthRedirect(MyProfile);

let MyProfileContainer = connect(
    mapStateToProps,
    actionCreators
)(AuthRedirectComponent);
export default MyProfileContainer;
