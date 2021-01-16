import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import usersAPI from "../../api/api";
import {
    setUsersActionCreator,
    setTotalUsersActionCreator,
    setPageSizeActionCreator,
    setPagesCountActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
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
        this.props.setIsFetching(true);

        usersAPI.getUsers(count, page).then((response) => {
            this.props.showMore(response.items);
            this.props.setPageSize(count);
            this.props.setPagesCount(Math.ceil(response.totalCount / count));
            this.props.setCurrentPage(page);
            this.props.setIsFetching(false);
        });
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
    };
};

let actionCreators = {
    showMore: setUsersActionCreator,
    setTotalUsersCount: setTotalUsersActionCreator,
    setPageSize: setPageSizeActionCreator,
    setPagesCount: setPagesCountActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setIsFetching: setIsFetchingActionCreator,
};

let UsersContainer = connect(
    mapStateToProps,
    actionCreators
)(UsersAPIContainer);

export default UsersContainer;
