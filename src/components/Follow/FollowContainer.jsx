import { connect } from "react-redux";
import Follow from "./Follow"

let mapStateToProps = (state) => {
    return {
        followData: state.followReducer.followData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        
    } 
}

const FollowContainer = connect(mapStateToProps, mapDispatchToProps)(Follow);

export default FollowContainer;
