import React from "react";
import style from "./User.module.css";

let User = (props) => {
    return (
        <div className={style.user}>
            <img src={props.avatar} alt="" />
            <div className={style.userDesc}>
                <a className={style.userName}>{props.name}</a>
                <a className={style.addUser}>Add friend</a>
            </div>
        </div>
    );
};
export default User;
