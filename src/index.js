import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import store from './store';

store.subscribe(() => {
    console.log("Store Updated : ", store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,  document.getElementById('root')
);
registerServiceWorker()