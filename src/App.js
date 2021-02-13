import React from "react";
import "./App.css";
import store from "./redux/reduxStore";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import FollowContainer from "./components/Follow/FollowContainer";
import { Route, withRouter, HashRouter, Switch, Redirect } from "react-router-dom";
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
const Settings = React.lazy(() => import("./components/Settings/Settings"));


class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert(promiseRejectionEvent.reason);
    }

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />;
        }
        return (
            <Switch>
                <Route path="/login" render={withSuspense(LoginContainer)} />
                <Route path="*" render={() => {
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
                                    <Switch>
                                        <Redirect exact from='/' to='/profile' />
                                        <Route path="/news" render={withSuspense(NewsContainer)}/>
                                        <Route path="/settings" render={withSuspense(Settings)}/>
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
                                        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    );
                }} />
            </Switch>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.appReducer.initialized,
        isAuth: state.authReducer.isAuth,
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
            <HashRouter>
                <AppContainer store={store} />
            </HashRouter>
        </Provider>
    )
}

export default MainApp;
