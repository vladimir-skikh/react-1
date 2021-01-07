import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let renderReactDom = (store) => {
    ReactDOM.render(
        <React.StrictMode>
          <App 
            store={store}
          />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderReactDom(store);

store.subscribe(() => {
  renderReactDom(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
