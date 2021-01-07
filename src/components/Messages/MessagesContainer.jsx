import React from "react";
import Messages from "./Messages"

let MessagesContainer = (props) => {
    
    let state = props.store.getState();

    return (<Messages store={props.store} dialogsData={state.messagesReducer.dialogsData} />);

};
export default MessagesContainer;
