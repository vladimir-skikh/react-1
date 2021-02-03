import React from 'react';
import style from './MyProfile.module.css';
import undefinedUser from '../../img/undefinedUser.png'
import MyProfileStatusContainer from './MyProfileStatus/MyProfileStatusContainer';

class MyProfile extends React.Component
{    

    templateAbout = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus libero vel massa vulputate congue. Aenean commodo sem vitae dolor varius, in cursus est semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nulla augue, pretium in metus eu, gravida auctor quam. Donec et sem metus. Nulla sit amet eros sem. Sed vel lacinia est, id laoreet erat.';

    hasContacts = false;
    contacts = [];

    componentDidMount() {
        for (let key in this.props.profile.contacts) {
            if (this.props.profile.contacts.key !== undefined) {
                this.hasContacts = true;
                this.contacts[key] = this.props.profile.contacts.key;
            }
        }
    }

    onAvatarChange = (e) => {
        if (e.target.files.length) {
            this.props.uploadPhoto(e.target.files[0]);
        }
    }

    render() {
        return (
            <div className={style.user}>
                <div className={style.userImageBlock}>
                    {
                        this.props.profile.photos.large
                        ? <img src={this.props.profile.photos.large} alt="" className={style.userImage} />
                        : <img src={undefinedUser} alt="" className={style.userImage} />
                    }
                </div>
                <div className={style.userInfoBlock}>
                    <div className={style.userInfoBlockItem + ' ' + style.userFullnameBlock}>
                        <h3 className={style.userInfoTitle + ' ' + style.userFullnameTitle}>
                            Fullname
                        </h3>
                        <span className={style.userFullname}>
                            {this.props.profile.fullName}
                        </span>
                        <MyProfileStatusContainer userId={this.props.profile.userId}/>
                    </div>
                    <div className={style.userInfoBlockItem + ' ' + style.userContactsBlock}>
                        <h3 className={style.userInfoTitle + ' ' + style.userFullnameTitle}>
                            Contacts
                        </h3>
                        {
                            this.hasContacts
                            ?                     
                                <ul className={style.userContactsList}>
                                    {
                                        this.contacts.map( (url, key) => (
                                            <li className={style.userContactsListItem + ' ' + key}>
                                                <a href={url} className={style.userContactslink}>
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
                    <div className={style.userInfoBlockItem}>
                        <h3 className={style.userInfoTitle}>
                            Avatar
                        </h3>
                        <input type="file" onChange={this.onAvatarChange}/>
                    </div>

                </div>
                <div className={style.userAboutBlock}>
                    <p className={style.userAbout}>
                        {
                            this.props.profile.aboutMe
                            ? this.props.profile.aboutMe
                            : this.templateAbout
                        }
                    </p>
                </div>
            </div>
        )
    }

}
export default MyProfile;