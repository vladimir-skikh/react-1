import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../hoc/withAuthRedirect";
import Users from "./Users";
import {
    showMoreUsersThunkCreator,
    setTotalUsersActionCreator,
    setPageSizeActionCreator,
    setPagesCountActionCreator,
    setCurrentPageActionCreator,
    setIsFetchingActionCreator,
    getUsersThunkCreator,
} from "../../redux/usersPageReducer";
import {
    getUsersData,
    getTotalUsers,
    getPageSize,
    getPagesCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getPages,
} from "../../redux/selectors/usersSelectors";
import Preloader from "../common/Preloader/Preloader";

class UsersAPIContainer extends React.Component {
    constructor(props) {
        super(props);

        this.count = this.props.pageSize;
    }

    onShowMoreClick = () => {
        let count = this.props.pageSize;
        let page = this.props.currentPage + 1;

        this.props.showMore(count, page);
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
        usersData: getUsersData(state),
        totalUsers: getTotalUsers(state),
        pageSize: getPageSize(state),
        pagesCount: getPagesCount(state),
        currentPage: getCurrentPage(state),
        pages: getPages(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

let actionCreators = {
    showMore: showMoreUsersThunkCreator,
    setTotalUsersCount: setTotalUsersActionCreator,
    setPageSize: setPageSizeActionCreator,
    setPagesCount: setPagesCountActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    setIsFetching: setIsFetchingActionCreator,
    getUsers: getUsersThunkCreator,
};

export default compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect,
)(UsersAPIContainer);
