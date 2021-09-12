import React from 'react';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../Reducers/authReducer';
import postReducer from '../Reducers/postReducer';

const thunkMiddleware = require('redux-thunk').default;


const mainReducer = combineReducers({
    auth : authReducer,
    post : postReducer
})
const store = createStore(mainReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;

