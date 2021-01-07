import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import NewsContainer from "./components/News/NewsContainer";
import Follow from "./components/Follow/Follow";
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
                    <Profile
                        store={props.store}
                    />
                    <div className="content">
                        <Route
                            path="/news"
                            render={() => <NewsContainer store={props.store} />}
                        />
                        <Route
                            path="/messages"
                            render={() => (
                                <MessagesContainer
                                    store={props.store}
                                />
                            )}
                        />
                    </div>
                    <Follow state={props.state.followReducer} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
