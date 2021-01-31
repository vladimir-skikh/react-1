import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

let Header = (props) => {

    const onLogoutClick = () => {
        props.onLogout();
    }

    return (
        <header className={style.header}>
            <div className={style.headerLogoBlock}>
                <img
                    src="https://www.pngmart.com/files/7/Envelope-Mail-PNG-Free-Download.png"
                    alt="Logo"
                />
                <h1 className={style.title}>
                    MessageMe
                </h1>
            </div>
            <div className={style.loginBlock}>
                {
                    props.isAuth
                    ? 
                        <button className={style.logoutButton} onClick={onLogoutClick}>
                            Logout
                        </button>
                    : 
                        <NavLink to='/login'>
                            <button className={style.loginButton} onClick={onLogoutClick}>
                                Login
                            </button>
                        </NavLink>

                }
            </div>
        </header>
    );
};
export default Header;
