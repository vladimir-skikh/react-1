import React from "react";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";

let ActiveDialog = (props) => {

    let newMessageText = React.createRef();

    let newMessage = () => {
        props.addNewMessage();
    }

    let activeDialogMessage = props.activeDialogMessagesData.map( message => 
        <Message
            author={message.author}
            avatar={message.avatar}
            message={message.message}
        />
    );

    let onChangeMessageText = () => {
        let message = newMessageText.current.value;
        props.changeNewMessageText(message);
    }

    return (
        <div className={style.activeDialog_block}>
            <div className={style.dialogWindow}>
                {activeDialogMessage}
            </div>
            <div>
                <div className={style.message}>
                    <input 
                        ref={newMessageText} 
                        type="text" 
                        className={style.messageText} 
                        onChange={onChangeMessageText} 
                        value={props.newMessageText}
                    />
                    <button onClick={newMessage} type="submit" className={style.send}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ActiveDialog;
