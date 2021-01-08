import React from "react";
import { connect } from "react-redux";
import ActiveDialog from "./ActiveDialog";
import {addNewMessageCreator, changeNewMessageTextActionCreator} from '../../../redux/messagesPageReducer'

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesReducer.newMessageText,
        activeDialogMessagesData: state.messagesReducer.activeDialogMessagesData,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {
            let action = addNewMessageCreator();
            dispatch(action); 
        },
        changeMessageText: (message) => {
            let action = changeNewMessageTextActionCreator(message);
            dispatch(action);
        }
    }
}
const ActiveDialogContainer = connect(mapStateToProps, mapDispatchToProps)(ActiveDialog);

export default ActiveDialogContainer;
