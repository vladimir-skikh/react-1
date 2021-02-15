import React from "react";
import style from "./Users.module.css";
import UserContainer from "./User/UserContainer";
import Pagination from '../common/Pagination/Pagination';


let Users = (props) => {
    return (
        <div className={style.users}>
            {
                props.usersData.map((user) => (
                    <UserContainer
                        id={user.id}
                        userName={user.name}
                        following={user.followed}
                        avatar={user.photos.large}
                        status={user.status}
                        followingInProgress={props.followingInProgress}
                    />
                ))
            }
            <Pagination 
                updateData={props.updateUsers}
                count={props.count}
                currentPage={props.currentPage}
                pages={props.pages}
            />
            {
                props.currentPage !== props.pages.length ?
                <button
                    className={style.showMoreButton}
                    onClick={props.onShowMoreClick}
                >
                    Show more
                </button> : ''
            }
        </div>
    )
}

export default Users;