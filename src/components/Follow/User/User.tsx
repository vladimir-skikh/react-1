import React, { FC } from "react";
import style from "./User.module.css";
import { NavLink } from 'react-router-dom';
import undefinedUser from '../../../img/undefinedUser.png';

type PropsType = {
    id: number
    avatar: string
    name: string
}

let User: FC<PropsType> = (props) => {
    return (
        <div className={style.user}>
            <NavLink to={'/user/' + props.id}>
            {
                props.avatar
                ? <img src={props.avatar} alt="" />
                : <img src={undefinedUser} alt=""/>
            }
            </NavLink>
            <div className={style.userDesc}>
                <span className={style.userName}>{props.name}</span>
                <span className={style.addUser}>Follow</span>
            </div>
        </div>
    );
};
export default User;
