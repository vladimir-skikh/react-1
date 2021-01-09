import React from "react";
import style from './Users.module.css';
import UserContainer from "./User/UserContainer";

let Users = (props) => {

    let createElement = React.createRef();

    let onShowMoreClick = () => {
        let lastUser = createElement.current.value;
        props.showMore(lastUser)
    }

    let allUsers = props.usersData.map(user => (
        <UserContainer 
            id={user.id} 
            userName={user.userName} 
            following={user.following} 
            avatar={user.avatar} 
            status={user.status} 
            country={user.country} 
            city={user.city} 
        />
    ));

    return (
        <div className={style.users}>
            {allUsers}
            <button 
                className={style.showMoreButton}
                ref={createElement}
                onClick={onShowMoreClick}
            >
                Show more
            </button>
        </div>
    );
};
export default Users;
