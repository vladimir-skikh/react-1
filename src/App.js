import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Follow from "./components/Follow/Follow";
import Messages from "./components/Messages/Messages";
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
                    <Profile addPost={props.addPost} state={props.state.newsPage.newPostText} changeNewPostText={props.changeNewPostText}/>
                    <div className="content">
                        <Route path="/news" render={() => <News state={props.state.newsPage} />} />
                        <Route path="/messages" render={() => <Messages 
                                                                state={props.state.messagesPage} 
                                                                addNewMessage={props.addNewMessage} 
                                                                changeNewMessageText={props.changeNewMessageText}
                                                            />} />
                    </div>
                    <Follow state={props.state.follow} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
