import React from "react";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";

let ActiveDialog = () => {

    let newMessageText = React.createRef();

    let newMessage = () => {
        let message = newMessageText.current.value;
        alert(message);
    }

    return (
        <div className={style.activeDialog_block}>
            <div className={style.dialogWindow}>
                <Message
                    author="other"
                    avatar="https://themified.com/friend-finder/images/users/user-2.jpg"
                    message="Hi honey, how are you doing???? Long time no see. Where have
                    you been?"
                />
                <Message
                    author="me"
                    avatar="https://invisionbyte.ru/test/uploads/monthly_2018_01/Wmug__uf.thumb.jpg.eca0349ccc67dd24370df4c7e452e924.jpg"
                    message="I'm fine, thanks! What about you?"
                />
            </div>
            <div>
                <div className={style.message}>
                    <input ref={newMessageText} type="text" className={style.messageText} />
                    <button onClick={newMessage} type="submit" className={style.send}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ActiveDialog;
