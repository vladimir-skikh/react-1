import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
    setUsersActionCreator,
    setTotalUsersActionCreator,
    setPageSizeActionCreator,
    setPagesCountActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
    getUsersThunkCreator,
} from "../../redux/usersPageReducer";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);

        this.count = this.props.pageSize;
    }

    onShowMoreClick = () => {
        let count = this.props.pageSize;
        let page = this.props.currentPage + 1;

        this.updateUsers(count, page);
    };

    updateUsers = (count, page) => {
        this.props.getUsers(count, page);
    };

    componentDidMount() {
        let count = this.props.pageSize;
        let page = this.props.currentPage;

        if (this.props.usersData.length === 0) {
            this.updateUsers(count, page);
        }
    }

    render() {
        return (
            <>
                {this.props.isFetching ? (
                    <Preloader />
                ) : (
                    <Users
                        updateUsers={this.updateUsers}
                        onShowMoreClick={this.onShowMoreClick}
                        count={this.count}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        usersData={this.props.usersData}
                        pages={this.props.pages}
                        followingInProgress={this.props.followingInProgress}
                    />
                )}
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersReducer.usersData,
        totalUsers: state.usersReducer.totalUsers,
        pageSize: state.usersReducer.pageSize,
        pagesCount: state.usersReducer.pagesCount,
        currentPage: state.usersReducer.currentPage,
        pages: state.usersReducer.pages,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress,
    };
};

let actionCreators = {
    showMore: setUsersActionCreator,
    setTotalUsersCount: setTotalUsersActionCreator,
    setPageSize: setPageSizeActionCreator,
    setPagesCount: setPagesCountActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setIsFetching: setIsFetchingActionCreator,
    getUsers: getUsersThunkCreator,
};

let UsersContainer = connect(
    mapStateToProps,
    actionCreators
)(UsersAPIContainer);

export default UsersContainer;
