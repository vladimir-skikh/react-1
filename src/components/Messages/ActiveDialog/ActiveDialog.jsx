import React from "react";
import style from "./ActiveDialog.module.css";
import Message from "./Message/Message";

let ActiveDialog = () => {
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
                <form className={style.message}>
                    <input type="text" className={style.messageText} />
                    <button type="submit" className={style.send}>
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};
export default ActiveDialog;
