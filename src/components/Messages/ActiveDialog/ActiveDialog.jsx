import React from "react";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";
import {addNewMessageCreator, changeNewMessageTextActionCreator} from '../../../redux/messagesPageReducer'


let ActiveDialog = (props) => {

    let newMessageText = React.createRef();

    let activeDialogMessage = props.activeDialogMessagesData.map( message => 
        <Message
            author={message.author}
            avatar={message.avatar}
            message={message.message}
        />
    );

    let newMessage = () => {
        let action = addNewMessageCreator();
        props.dispatch(action);
    }

    let onChangeMessageText = () => {
        let message = newMessageText.current.value;
        let action = changeNewMessageTextActionCreator(message);
        props.dispatch(action);
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
