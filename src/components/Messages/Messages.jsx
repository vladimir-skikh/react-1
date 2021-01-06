import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import ActiveDialog from "./ActiveDialog/ActiveDialog";

let Messages = (props) => {

    let dialogs = props.state.dialogsData
        .map( dialog => 
            <Dialog
                avatar={dialog.avatar}
                name={dialog.name}
                lastMessage={dialog.lastMessage}
                id={dialog.id}
            />
        );

    return (
        <div className={style.messages}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.activeDialog}>
                <ActiveDialog 
                    newMessageText={props.state.newMessageText}
                    activeDialogMessagesData={props.state.activeDialogMessagesData} 
                    addNewMessage={props.addNewMessage} 
                    changeNewMessageText={props.changeNewMessageText}
                />
            </div>
        </div>
    );
};
export default Messages;
