import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Users from './Users';
import {
    setUsersActionCreator, 
    setTotalUsersActionCreator, 
    setPageSizeActionCreator, 
    setPagesCountActionCreator,
    setCurrentPageActionCreator
} from '../../redux/usersPageReducer';


class UsersAPIContainer extends React.Component {

    constructor (props) {
        super(props);

        this.count = this.props.pageSize;
    }

    onShowMoreClick = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.showMore(response.data.items);
        });
    };

    updateUsers = (count, page) => {
        let query = `https://social-network.samuraijs.com/api/1.0/users?count=${count}&page=${page}`;

        axios.get(query).then(response => {
            this.props.showMore(response.data.items);
            this.props.setPageSize(count);
            this.props.setPagesCount(Math.ceil(response.data.totalCount / count));
            this.props.setCurrentPage(page);
        });
    }

    componentDidMount() {

        let count = this.props.pageSize;
        let page = this.props.currentPage;

        if (this.props.usersData.length === 0) {
            this.updateUsers(count, page);
        }       
    }

    render() {
        return (
            <Users 
                updateUsers={this.updateUsers} 
                onShowMoreClick={this.onShowMoreClick} 
                count={this.count} 
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                usersData={this.props.usersData}
                pages={this.props.pages}
            />
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
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        showMore: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        },
        setTotalUsersCount: (count) => {
            let action = setTotalUsersActionCreator(count);
            dispatch(action);
        },
        setPageSize: (size) => {
            let action = setPageSizeActionCreator(size);
            dispatch(action);
        },
        setPagesCount: (count) => {
            let action = setPagesCountActionCreator(count);
            dispatch(action);
        },
        setCurrentPage: (pageNum) => {
            let action = setCurrentPageActionCreator(pageNum);
            dispatch(action);
        },
    }
}
let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;