import React from "react";
import style from "./Users.module.css";
import UserContainer from "./User/UserContainer";
import axios from "axios";


/** Добавить current page !!! */
class Users extends React.Component {

    constructor(props) {
        super(props);

        this.itemsPerPage = React.createRef();
    }


    changePagesCount = () => {
        let count = this.itemsPerPage.current.innerText;
        this.updateUsers(count);
    }

    onShowMoreClick = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.showMore(response.data.items);
        });
    };

    updateUsers = (count) => {
        let query = `https://social-network.samuraijs.com/api/1.0/users?count=${count}`;

        axios.get(query).then(response => {
            this.props.showMore(response.data.items);
            this.props.setPageSize(count);
            this.props.setTotalUsersCount(parseInt(response.data.totalCount));
            this.props.setPagesCount(response.data.totalCount / count);
        });
    }

    componentDidMount() {

        let count = 10;

        let query = `https://social-network.samuraijs.com/api/1.0/users?count=${count}`;

        if (this.props.usersData.length === 0) {
            axios.get(query).then(response => {
                this.props.showMore(response.data.items);
                this.props.setPageSize(count);
                this.props.setTotalUsersCount(parseInt(response.data.totalCount));
                this.props.setPagesCount(response.data.totalCount / count);
            });
        }
    }

    render() {
        return (
            <div className={style.users}>
                <button onClick={this.changePagesCount} ref={this.itemsPerPage}>10</button>
                <button onClick={this.changePagesCount} ref={this.itemsPerPage}>20</button>
                <button onClick={this.changePagesCount} ref={this.itemsPerPage}>30</button>
                <div className={style.pagination}>
                    {this.props.pagesCount}
                </div>
                {
                    this.props.usersData.map((user) => (
                        <UserContainer
                            id={user.id}
                            userName={user.name}
                            following={user.following}
                            avatar={user.photos.large}
                            status={user.status}
                        />
                    ))
                }
                <button
                    className={style.showMoreButton}
                    onClick={this.onShowMoreClick}
                >
                    Show more
                </button>
            </div>
        );
    }
}

export default Users;
