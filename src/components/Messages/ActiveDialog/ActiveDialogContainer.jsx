import React from "react";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageCreator, changeNewMessageTextActionCreator} from '../../../redux/messagesPageReducer'

let ActiveDialogContainer = (props) => {

    let state = props.store.getState();

    let addNewMessage = () => {
        let action = addNewMessageCreator();
        props.store.dispatch(action);
    }

    let changeMessageText = (message) => {
        let action = changeNewMessageTextActionCreator(message);
        props.store.dispatch(action);
    }

    return (
        <ActiveDialog 
            addNewMessage={addNewMessage} 
            changeMessageText={changeMessageText} 
            activeDialogMessagesData={state.messagesReducer.activeDialogMessagesData}
            newMessageText={state.messagesReducer.newMessageText}
        />
    );
};
export default ActiveDialogContainer;
