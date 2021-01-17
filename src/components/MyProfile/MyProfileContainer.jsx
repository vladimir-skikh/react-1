import { compose } from "redux";
import { connect } from "react-redux";
import MyProfile from "./MyProfile";
import withAuthRedirect from "../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {};
};
const actionCreators = {};

let MyProfileContainer = compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect
)(MyProfile);

export default MyProfileContainer;
