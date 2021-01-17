import { connect } from "react-redux";
import MyProfile from './MyProfile';
import AuthRedirect from '../hoc/AuthRedirect';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}
const actionCreators = {

}

let AuthRedirectComponent = AuthRedirect(MyProfile);

let MyProfileContainer = connect(mapStateToProps, actionCreators)(AuthRedirectComponent);
export default MyProfileContainer;