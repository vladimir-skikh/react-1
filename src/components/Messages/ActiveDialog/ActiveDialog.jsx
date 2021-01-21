import React from "react";
import { Field, reduxForm } from "redux-form";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";

let ActiveDialog = (props) => {
    let activeDialogMessage = props.activeDialogMessagesData.map((message) => (
        <Message
            author={message.author}
            avatar={message.avatar}
            message={message.message}
        />
    ));

    let onAddMessage = (formData) => {
        props.addNewMessage(formData.newMessage);
    };

    return (
        <div className={style.activeDialog_block}>
            <div className={style.dialogWindow}>{activeDialogMessage}</div>
            <div>
                <NewMessageFromRedux onSubmit={onAddMessage} />
            </div>
        </div>
    );
};

const NewMessageFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.message}>
            <Field
                component="input"
                type="text"
                name="newMessage"
                className={style.messageText}
            />
            <button type="submit" className={style.send}>
                Send
            </button>
        </form>
    );
};

const NewMessageFromRedux = reduxForm({
    form: 'newMessageForm',
})(NewMessageFrom);
export default ActiveDialog;
