import { connect } from "react-redux";
import Users from './Users';
import {setUsersActionCreator, setTotalUsersActionCreator, setPageSizeActionCreator, setPagesCountActionCreator} from '../../redux/usersPageReducer';

let mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer.usersData,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize,
        pagesCount: state.usersReducer.pagesCount,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        showMore: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        },
        setTotalUsersCount: (count) => {
            let action = setTotalUsersActionCreator(count);
            dispatch(action);
        },
        setPageSize: (size) => {
            let action = setPageSizeActionCreator(size);
            dispatch(action);
        },
        setPagesCount: (count) => {
            let action = setPagesCountActionCreator(count);
            dispatch(action);
        },
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;