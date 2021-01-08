import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import NewsContainer from "./components/News/NewsContainer";
import FollowContainer from "./components/Follow/FollowContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <div className="header-background">
                    <div className="wrapper wrapper-header">
                        <Header />
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
                    </div>
                    <FollowContainer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
