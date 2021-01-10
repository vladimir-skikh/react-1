import { connect } from "react-redux";
import Users from './Users';
import {setUsersActionCreator} from '../../redux/usersPageReducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer.usersData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        showMore: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        }
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;