import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, changeNewPostText, addNewMessage, changeNewMessageText} from './redux/state';

export let renderReactDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost} addNewMessage={addNewMessage} changeNewPostText={changeNewPostText} changeNewMessageText={changeNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderReactDom(state);

subscribe(renderReactDom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
