//middle ware is between action and root reducer
//a function which gwt thw action , do sth on it then pass to root reducer

//logger is useful to debug the redux code

import {createStore , applyMiddleware} from 'redux';
import logger from 'redux-logger' ;

import rootReducer from './root-reducer';

const middlewares = [logger];

//apply gives all the logger as props;
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

//pass it to provider in index.js