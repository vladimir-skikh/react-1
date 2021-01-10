import { connect } from "react-redux";
import User from './User';
import {followActionCreator, unfollowActionCreator} from '../../../redux/usersPageReducer'


let mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        userName: ownProps.userName,
        following: ownProps.following,
        avatar: ownProps.avatar,
        status: ownProps.status,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (user_id) => {
            let action = followActionCreator(user_id);
            dispatch(action);
        },
        unfollowUser: (user_id) => {
            let action = unfollowActionCreator(user_id);
            dispatch(action);
        },
    }
}

let UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;