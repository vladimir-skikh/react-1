import React from 'react';
import style from './UserProfile.module.css';
import undefinedUser from '../../img/undefinedUser.png';
import UserProfileStatusContainer from './UserProfileStatus/UserProfileStatusContainer';


let UserProfile = ({profile}) => {

    let templateAbout = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus libero vel massa vulputate congue. Aenean commodo sem vitae dolor varius, in cursus est semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nulla augue, pretium in metus eu, gravida auctor quam. Donec et sem metus. Nulla sit amet eros sem. Sed vel lacinia est, id laoreet erat.';

    let hasContacts = false;
    let contacts = [];

    for (let key in profile.contacts) {
        if (profile.contacts.key !== undefined) {
            hasContacts = true;
            contacts[key] = profile.contacts.key;
        }
    }

    return (
        <div className={style.user}>
            <div className={style.userImageBlock}>
                {
                    profile.photos.large
                    ? <img src={profile.photos.large} alt="" className={style.userImage} />
                    : <img src={undefinedUser} alt="" className={style.userImage} />
                }
            </div>
            <div className={style.userInfoBlock}>
                <div className={style.userInfoBlockItem + ' ' + style.userFullnameBlock}>
                    <h3 className={style.userInfoTitle + ' ' + style.userFullnameTitle}>
                        Fullname
                    </h3>
                    <span className={style.userFullname}>
                        {profile.fullName}
                    </span>
                    <UserProfileStatusContainer />
                </div>
                <div className={style.userInfoBlockItem + ' ' + style.userContactsBlock}>
                    <h3 className={style.userInfoTitle + ' ' + style.userFullnameTitle}>
                        Contacts
                    </h3>
                    {
                        hasContacts
                        ?                     
                            <ul className={style.userContactsList}>
                                {
                                    contacts.map( (url, key) => (
                                        <li className={style.userContactsListItem + ' ' + key}>
                                            <a href={url}>
                                                {key}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        : 
                            <span className={style.userContactsUnavailable}>
                                User has no available contatcs
                            </span>
                    }
                </div>
            </div>
            <div className={style.userAboutBlock}>
                <p className={style.userAbout}>
                    {
                        profile.aboutMe
                        ? profile.aboutMe
                        : templateAbout
                    }
                </p>
            </div>
        </div>
    )
}

export default UserProfile;