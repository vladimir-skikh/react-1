import { connect } from "react-redux";
import MyProfile from './MyProfile';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    }
}
const actionCreators = {

}

let MyProfileContainer = connect(mapStateToProps, actionCreators)(MyProfile);
export default MyProfileContainer;