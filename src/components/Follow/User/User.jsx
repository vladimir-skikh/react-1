import React from "react";
import style from "./User.module.css";

let User = (props) => {
    return (
        <div className={style.user}>
            <img src={props.avatar} alt="" />
            <div className={style.userDesc}>
                <span className={style.userName}>{props.name}</span>
                <span className={style.addUser}>Add friend</span>
            </div>
        </div>
    );
};
export default User;
