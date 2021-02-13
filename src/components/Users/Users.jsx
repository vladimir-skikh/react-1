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
                    <li 
                        className={style.paginationListItem + ' ' + (props.currentPage === 1 ? style.hidden : '')}
                        onClick={ () => {
                            onChangeCurrentPage(1);
                        }}
                    >
                        ⋘
                    </li>
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
                    <li 
                        className={style.paginationListItem + ' ' + (props.currentPage === props.pages.length ? style.hidden : '')}
                        onClick={ () => {
                            onChangeCurrentPage(props.pages.length);
                        }}
                    >
                        ⋙
                    </li>
                </ul>
            </div>
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
