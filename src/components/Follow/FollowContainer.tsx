import React from "react";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/followReducer";
import { AppStateType } from "../../redux/reduxStore";
import { getFollowComponentUsers } from "../../redux/selectors/followSelector";
import { UsersPageUserDataType } from "../../redux/types/types";
import Follow from "./Follow";

type Props = {
    followData: Array<UsersPageUserDataType>
    getUsers: (count: number, pageNum: number) => void
}

class FollowAPIContainer extends React.Component<Props> 
{
    componentDidMount() {
        this.props.getUsers(3, 1);
    }
    render() {
        return(
            <div>
                {
                    this.props.followData.length > 0 
                    ? <Follow followData={this.props.followData} /> 
                    : ''
                }
            </div>
        );
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        followData: getFollowComponentUsers(state),
    }
}
let actionCreators = {
    getUsers: getUsersThunkCreator
}

const FollowContainer = connect(mapStateToProps, actionCreators)(FollowAPIContainer);

export default FollowContainer;
