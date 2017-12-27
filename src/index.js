import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from "redux";

const initialState = {
    result: 0,
    lastValues: []
};

const userReducer = (state = {
    name: "Traxxex",
    age: 25
}, action) => {
    switch (action.type) {
        case "SETNAME":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SETAGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state;
};

const myLogger = (store) => (next) => (action) => {
    console.log("Logged ACtion : ", action);
    next(action);
}

const store = createStore(combineReducers({ reducer, userReducer }), {}, applyMiddleware(myLogger));

store.subscribe(() => {
    console.log("Store Updated : ", store.getState());
});

store.dispatch({
    type: "ADD",
    payload: 100
});

store.dispatch({
    type: "ADD",
    payload: 5
});

store.dispatch({
    type: "SUBTRACT",
    payload: 15
});

store.dispatch({
    type: "SETNAME",
    payload: "Drow Ranger"
});

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();