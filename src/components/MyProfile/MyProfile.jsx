import React from 'react';
import style from './MyProfile.module.css';
import { Redirect } from "react-router-dom";


const MyProfile = (props) => {

    if (props.isAuth === false) {
        return <Redirect to='/login' />
    }
    
    return (
        <div className={style.myprofile}>
            My Profile
        </div>
    )
}
export default MyProfile;