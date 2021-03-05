import React from "react";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/followReducer";
import { AppStateType } from "../../redux/reduxStore";
import { getFollowComponentUsers } from "../../redux/selectors/followSelector";
import { UsersPageUserDataType } from "../../redux/types/types";
import Follow from "./Follow";

type MapStatePropsType = {
    followData: Array<UsersPageUserDataType>
}
type MapDispatchPropsType = {
    getUsers: (count: number, page: number) => void
}
type OwnPropsType = {}

type Props = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

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
  
let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    followData: getFollowComponentUsers(state),
});

let actionCreators = {
    getUsers: getUsersThunkCreator
}

const FollowContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, actionCreators)(FollowAPIContainer);

export default FollowContainer;