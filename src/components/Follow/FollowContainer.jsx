import React from "react";
import Follow from "./Follow"

let FollowContainer = (props) => {

    let state = props.store.getState();

    return (<Follow followData={state.followReducer.followData} />);
};
export default FollowContainer;
