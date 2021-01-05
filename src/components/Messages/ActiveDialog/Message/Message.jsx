import React from "react";
import style from "./Message.module.css";

let AllMessages = (props) => {
    if (props.author === "other") {
        return (
            <div className={style.message_block_left}>
                <img src={props.avatar} alt="" className={style.avatar} />
                <p className={style.text + ' ' + style.text_right}>
                    {props.message}
                </p>
            </div>
        );
    } else {
        return (
            <div className={style.message_block_right}>
                <img src={props.avatar} alt="" className={style.avatar} />
                <p className={style.text + ' ' + style.text_left}>
                    {props.message}
                </p>
            </div>
        );
    }
};
export default AllMessages;
