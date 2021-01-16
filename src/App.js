import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import NewsContainer from "./components/News/NewsContainer";
import FollowContainer from "./components/Follow/FollowContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UserProfileContainer from "./components/UserProfile/UserProfileContainer";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <div className="header-background">
                    <div className="wrapper wrapper-header">
                        <HeaderContainer />
                    </div>
                </div>
                <div className="wrapper wrapper-content">
                    <Nav />
                    <Profile />
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
                    </div>
                    <FollowContainer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
