import React from "react";
import { connect } from "react-redux";
import { getUsersThunkCreator } from "../../redux/followReducer";
import { getFollowComponentUsers } from "../../redux/selectors/followSelector";
import Follow from "./Follow";

class FollowAPIContainer extends React.Component 
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

let mapStateToProps = (state) => {
    return {
        followData: getFollowComponentUsers(state),
    }
}
let actionCreators = {
    getUsers: getUsersThunkCreator
}

const FollowContainer = connect(mapStateToProps, actionCreators)(FollowAPIContainer);

export default FollowContainer;
