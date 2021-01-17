import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

let Nav = () => {
    return (
        <nav className={style.nav}>
            <h4 className={style.title}>Menu</h4>
            <ul>
                <li>
                    <NavLink
                        activeClassName={style.active}
                        to="/profile"
                        className={style.item}
                    >
                        My Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.item}
                        to="/messages"
                        activeClassName={style.active}
                    >
                        Messages
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.item}
                        to="/news"
                        activeClassName={style.active}
                    >
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={style.item}
                        to="/music"
                        activeClassName={style.active}
                    >
                        Music
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/settings"
                        className={style.item}
                        activeClassName={style.active}
                    >
                        Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/users"
                        className={style.item}
                        activeClassName={style.active}
                    >
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Nav;
