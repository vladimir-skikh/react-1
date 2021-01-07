import React from "react";
import style from "./Messages.module.css";
import Dialog from "./Dialog/Dialog";
import ActiveDialogContainer from "./ActiveDialog/ActiveDialogContainer";

let Messages = (props) => {

    let dialogs = props.dialogsData
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
                <ActiveDialogContainer 
                    store={props.store}
                />
            </div>
        </div>
    );
};
export default Messages;
