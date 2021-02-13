import React from 'react';
import style from './Contacts.module.css';

const Contatcs = ({contacts}) => {
    return (
        <ul className={style.userContactsList}>
        {
            Object.keys(contacts).map( key => {
                if (contacts[key] !== '' && contacts[key] !== null) {
                    return (
                        <li className={style.userContactsListItem}>
                            <a href={contacts[key]} className={style.userContactslink + ' ' + style[key]}></a>
                        </li>
                    );
                }
                else return '';
            })
        }
        </ul>
    );
}

export default Contatcs;