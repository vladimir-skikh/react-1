import React, { FC } from 'react';
import style from './Contacts.module.css';
import { ContactsMapType } from '../../../redux/types/types';

type PropsType = {
    contacts: ContactsMapType
}

const Contacts: FC<PropsType> = ({
    contacts
}) => {
    return (
        <ul className={style.userContactsList}>
        {
            Object.keys(contacts).map( key => {
                if (contacts[key] !== '' && contacts[key] !== null) {
                    return (
                        <li className={style.userContactsListItem}>
                            <a href={contacts[key]} className={style.userContactslink + ' ' + style[key]}>{key}</a>
                        </li>
                    );
                }
                else return '';
            })
        }
        </ul>
    );
}

export default Contacts;