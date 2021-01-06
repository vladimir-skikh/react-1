import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderReactDom = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App 
            state={state} 
            addPost={store.addPost.bind(store)} 
            addNewMessage={store.addNewMessage.bind(store)} 
            changeNewPostText={store.changeNewPostText.bind(store)} 
            changeNewMessageText={store.changeNewMessageText.bind(store)}
          />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderReactDom(store.getState());

store.subscribe(renderReactDom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
