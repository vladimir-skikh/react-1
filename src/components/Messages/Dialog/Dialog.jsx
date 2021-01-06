import React from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";


let Dialog = (props) => {

    let path = "/messages/" + props.id;

    return (
        <NavLink to={path} className={style.dialog}>
            <img src={props.avatar} alt="" className={style.avatar} />
            <div className={style.dialogDesc}>
                <span className={style.name}>{props.name}</span>
                <span className={style.message}>{props.lastMessage}</span>
            </div>
        </NavLink>
    );
};
export default Dialog;
