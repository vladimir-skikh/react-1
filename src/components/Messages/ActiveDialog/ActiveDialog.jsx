import React from "react";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";


let ActiveDialog = (props) => {

    let newMessageText = React.createRef();

    let activeDialogMessage = props.activeDialogMessagesData.map( message => 
        <Message
            author={message.author}
            avatar={message.avatar}
            message={message.message}
        />
    );

    let onAddMessage = () => {
        props.addNewMessage();
    }

    let onChangeMessageText = () => {
        let message = newMessageText.current.value;
        props.changeMessageText(message);
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
                    <button onClick={onAddMessage} type="submit" className={style.send}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ActiveDialog;
