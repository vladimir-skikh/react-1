import React from "react";
import style from "./Users.module.css";
import UserContainer from "./User/UserContainer";


let Users = (props) => {

    let paginationStart = 0;
    let paginationEnd = 11;
    if (props.currentPage > 6) {
        paginationStart = props.currentPage - 6;
        paginationEnd = props.currentPage + 5;
    }

    let onChangeCurrentPage = (pageNum) => {
        props.updateUsers(props.count, pageNum);
    }

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
            <div className={style.pagination}>
                <ul className={style.paginationList}>
                    {   
                        props.pages.slice(paginationStart, paginationEnd).map( page => (
                            <li 
                                className={style.paginationListItem + ' ' + (props.currentPage === page ? style.paginationListItemCurrent : '')}
                                onClick={ () => {
                                    onChangeCurrentPage(page);
                                }}
                            >
                                {page}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <button
                className={style.showMoreButton}
                onClick={props.onShowMoreClick}
            >
                Show more
            </button>
        </div>
    )
}

export default Users;