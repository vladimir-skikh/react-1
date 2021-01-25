import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import FollowContainer from "./components/Follow/FollowContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { Route, withRouter } from "react-router-dom";
import { Component } from "react";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";

class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />;
        }
        return (
            <div>
                <div className="header-background">
                    <div className="wrapper wrapper-header">
                        <HeaderContainer />
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <aside className="sidebar">
                        <Nav />
                        <FollowContainer />
                    </aside>
                    <div className="content">
                        <Route path="/news" render={() => <NewsContainer />} />
                        <Route
                            path="/messages"
                            render={() => <MessagesContainer />}
                        />
                        <Route
                            path="/users"
                            render={() => <UsersContainer />}
                        />
                        <Route
                            path="/user/:userId"
                            render={() => <UserProfileContainer />}
                        />
                        <Route
                            path="/profile"
                            render={() => <MyProfileContainer />}
                        />
                        <Route path="/login" render={() => <LoginContainer />} />
                    </div>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.appReducer.initialized,
    }
}

let actionCreators = {
    initializeApp: initializeApp,
}

export default compose(
    withRouter, 
    connect(mapStateToProps, actionCreators),
)(App);
