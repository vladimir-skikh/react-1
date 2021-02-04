import React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import { compose } from 'redux';
import MyProfileSettingsContainer from './MyProfileSettings/MyProfileSettingsContainer';

const Settings = (props) => {
    return (
        <div>
            <ul>
                <NavLink to='/settings/myprofile'>
                    <li>
                        My profile info
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

const SettingsContainer = (props) => {
    if (props.location.pathname.indexOf('myprofile', props.location.pathname) !== -1) {
        return (
            <MyProfileSettingsContainer />
        );
    }
    else {
        return(
            <Settings />
        );
    }
}




export default compose(withRouter)(SettingsContainer);