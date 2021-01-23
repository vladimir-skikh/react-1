import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormControls/FormControls";
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
            <div className={style.messageFormBody}>
                <div className={style.messageTextBlock}>
                    <Field
                        inputClassName={style.messageText}
                        wrapperClassName={style.messageTextWrapper}
                        component={Input}
                        type="text"
                        name="newMessage"
                        validate={[required]}
                        checkSubmit={true}
                    />
                </div>
                <button type="submit" className={style.send}>
                    Send
                </button>
            </div>
        </form>
    );
};

const NewMessageFromRedux = reduxForm({
    form: 'newMessageForm',
})(NewMessageFrom);
export default ActiveDialog;
