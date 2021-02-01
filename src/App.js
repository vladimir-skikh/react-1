import React from "react";
import "./App.css";
import store from "./redux/reduxStore";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import FollowContainer from "./components/Follow/FollowContainer";
import { Route, withRouter, BrowserRouter } from "react-router-dom";
import { Component } from "react";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import withSuspense from "./components/hoc/withSuspense";

/** Lazy load */
const NewsContainer = React.lazy(() => import("./components/News/NewsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"));
const UserProfileContainer = React.lazy(() => import("./components/UserProfile/UserProfileContainer"));
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"));


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
                        <Route path="/news" render={withSuspense(NewsContainer)}/>
                        <Route
                            path="/messages"
                            render={withSuspense(MessagesContainer)}/>
                        <Route
                            path="/users"
                            render={withSuspense(UsersContainer)} />
                        <Route
                            path="/user/:userId"
                            render={withSuspense(UserProfileContainer)}/>
                        <Route
                            path="/profile"
                            render={() => <MyProfileContainer />}
                        />
                        <Route path="/login" render={withSuspense(LoginContainer)} />
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

const AppContainer =  compose(
    withRouter, 
    connect(mapStateToProps, actionCreators),
)(App);

const MainApp = (props) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppContainer store={store} />
            </BrowserRouter>
        </Provider>
    )
}

export default MainApp;
