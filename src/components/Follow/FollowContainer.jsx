import { connect } from "react-redux";
import { getFollowComponentUsers } from "../../redux/selectors/followSelector";
import Follow from "./Follow"

let mapStateToProps = (state) => {
    return {
        followData: getFollowComponentUsers(state),
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    } 
}

const FollowContainer = connect(mapStateToProps, mapDispatchToProps)(Follow);

export default FollowContainer;
