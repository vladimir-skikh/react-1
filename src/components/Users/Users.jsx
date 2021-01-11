import React from "react";
import style from "./Users.module.css";
import UserContainer from "./User/UserContainer";
import axios from "axios";

class Users extends React.Component {

    onShowMoreClick = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.showMore(response.data.items);
        });
    };

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.showMore(response.data.items);
        });
    }

    render() {
        return (
            <div className={style.users}>
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
